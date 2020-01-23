<template>
  <div class="container">
    <div class="large_search_area">
      <header class="mdl-layout__header mdl-layout__header--transparent">
        <div class="mdl-layout__header-row">
          <div class="mdl-layout-spacer"></div>
          <button id="about-menu"
                  class="mdl-button mdl-js-button mdl-color-text--white">
            <i class="material-icons mdl-color-text--white">info</i> <span class="mdl-layout--large-screen-only">စီမံကိန်းအကြောင်း</span>
          </button>

          <ul class="mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect"
              for="about-menu">
              <li class="mdl-menu__item">
                  <router-link :to="{ name: 'about' }">စီမံကိန်းအကြောင်း</router-link>
              </li>
              <li class="mdl-menu__item">
                  <router-link :to="{ name: 'info' }">အချက်အလက်ရရှိနိုင်မှု အခြေအနေ</router-link>
              </li>
              <li class="mdl-menu__item">
                  <router-link :to="{ name: 'faq' }">ဝက်ဘ်ဆိုဒ်အသုံးပြုပုံ</router-link>
              </li>
              <li class="mdl-menu__item">
                  <router-link :to="{ name: 'history' }">လွှတ်တော်သမိုင်း မှတ်တမ်း</router-link>
              </li>
          </ul>
        </div>
      </header>
      <div class="jumbotron-wrapper">
        <h2><router-link :to="{name: 'home'}">လွှတ်တော်အစည်းအဝေး မှတ်တမ်းများ</router-link></h2>
        <div class="alpha_label">[ Alpha Version ]</div>
        <input type="text" name="search" id="keyword_search" v-model="keyword" @keyup.enter="search"> 
        <button class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored" v-on:click="search">ရှာဖွေပါ</button> 
        <div class="alpha">
          ယခု website သည် စမ်းသပ်ဆဲကာလဖြစ်သောကြောင့် အဆင်မပြေမှုများရှိပါက တောင်းပန်အပ်ပါသည်။ <br/>
          [ယခုဝက်ဘ်ဆိုဒ်တွင် ရရှိနိုင်သော အချက်အလက်များ၏ နောက်ဆုံးအခြေအနေနှင့် မရရှိနိုင်သော အချက်အလက်များအကြောင်းကို 
          <router-link :to="{name:'info'}">အသေးစိတ် လေ့လာရန်။</router-link>]
</div>
        <div class="error">
          <span class="mdl-chip mdl-color--red" v-if="error">
            <span class="mdl-chip__text mdl-color-text--white">{{ error }}</span>
          </span>
        </div>
        <span class="bg_attr">
          Photo by Aung Htun Linn  
        </span> 
      </div>
    </div>
    <legislature v-if="this.$route.name == 'home'"/>
    <browse v-if="this.$route.name == 'browse'"/>
    <div class="mdl-grid" v-if="this.$route.name == 'search'">
      <div class="mdl-cell mdl-cell--12-col">
        <div class="results_wrapper">ရှာဖွေထားသောစကားလုံး - <strong>{{keyword}}</strong></div>
        <div class="results_count">ရှာဖွေတွေ့ရှိမှုအရေအတွက် - {{ result_count }}</div>
      </div>
      <div class="mdl-cell mdl-cell--6-col fiter_sort_wrapper">
        ရှာဖွေတွေ့ရှိမှုများကို စီစစ်ရန် - 
        <div class="mdl-textfield mdl-js-textfield">
            <select class="mdl-textfield__input" v-model="filter_legislature">
              <option v-for="(name, value) in legislatures" :value=value>{{ name }}</option>
            </select>
        </div>
      </div>
      <div class="mdl-cell mdl-cell--6-col fiter_sort_wrapper">
        ရှာဖွေတွေ့ရှိမှုများ စီစဥ်ပုံ - 
        <div class="mdl-textfield mdl-js-textfield">
            <select class="mdl-textfield__input" v-model="sort">
              <option v-for="(name, value) in sort_options" :value=value>{{ name }}</option>
            </select>
        </div>
      </div>
      <spinner v-if="loading"></spinner>
      <div class="mdl-cell mdl-cell--12-col" v-if="show_no_result">No Results Found!</div>
      <div class="mdl-cell mdl-cell--3-col mdl-cell--4-col-tablet mdl-cell--4-col-phone" v-for="result in results" v-bind:key="result._id">
          <div class="mdl-card mdl-shadow--4dp single-result">
              <span :class="getLegislatureChipClass(result.legislature)">
                <span class="mdl-chip__text">{{ getLegislatureName(result.legislature) }}</span>
              </span>
              <p class="date-info">
                <iconify-icon data-icon="mdi:calendar" width="1.5rem" height="1.5rem"></iconify-icon>
                <span>{{ result.date.org_txt }}</span>
              </p>
              <router-link :to="{ name: 'search_transcript', params: { id: result._id, keyword: keyword }}">
                <h5 class="title" v-if="result.sitting_day">
                  {{ termName(result.term) }} <br/>
                  {{ sessionName(result.session) }}<br/>
                  {{ sittingDayName(result.sitting_day) }}
                </h5>
                <h5 class="title" v-else>{{ result.title }}</h5>
              </router-link>
          </div>  
      </div>
      <infinite-loading :identifier="infiniteId" @infinite="infiniteHandler"></infinite-loading>
    </div>
    <site-footer></site-footer>
  </div>
</template>

<script>

import Axios from 'axios'
import config from '@/config/index.js'
import ByLegislature from '@/components/ByLegislature'
import {Jumper} from 'vue-loading-spinner'
import Browse from '@/components/Browse.vue'
import InfiniteLoading from 'vue-infinite-loading'
import SiteFooter from '@/components/partials/Footer'
import MeetingNames from '@/helpers/MeetingNames.js'

export default {
  name: 'Home',
  components: {
    'spinner' : Jumper,
    'browse' : Browse,
    'infinite-loading' : InfiniteLoading,
    'legislature' : ByLegislature,
    'site-footer' : SiteFooter
  },
  data () {
    return {
      loading: false,
      keyword: '',
      results: [],
      result_count: '',
      error: '',
      show_no_result: false,
      page: 1,
      filter_legislature : 'all',
      sort : 'score',
      legislatures : {
        'all' : 'လွှတ်တော်အားလုံး',
        'lower' : 'ပြည်သူ့လွှတ်တော်',
        'upper' : 'အမျိုးသားလွှတ်တော်'
      },
      sort_options : {
        'score' : 'ရှာဖွေတွေ့ရှိမှုအရေအတွက်',
        'latest' : 'နောက်ဆုံးအစည်းအဝေးမှတ်တမ်း'
      },
      infiniteId: +new Date(),
    }
  },
  beforeMount() {
    if (this.$route.params.keyword) {
      this.keyword = this.$route.params.keyword;
    } else {
      this.keyword = '';
    }
  },
  watch : {
    filter_legislature : function() {
      this.resetResults();
    },
    sort : function() {
      this.resetResults();
    }
  },
  methods: {
    search() {
      this.$router.push({ 
        name: 'search', 
        params: { 
          keyword: this.keyword
        } 
      });
      this.resetResults();
    },
    resetResults() {
      this.results = [];
      this.error = '';
      this.result_count = 0;
      this.show_no_result = false;
      this.page = 1;
      this.infiniteId += 1;
    },
    infiniteHandler($state) {
      this.keyword = this.keyword.trim();
      const api_url = config.api_url + "/transcripts/search?keyword=" + this.keyword;
      Axios.get(api_url, {
        params: {
          legislature: this.filter_legislature,
          sort: this.sort,
          page: this.page
        },
      }).then(
        (response) => {
          if (response.data.data.length) {
            this.page += 1;
            this.result_count = response.data.pagination.total;
            this.results.push(...response.data.data);
            $state.loaded();
          } else {
            $state.complete();
          }
        },
        (error) => {
          this.error = error;
        }
      );
    },
    getLegislatureName(key) {
        return this.legislatures[key];
    },
    getLegislatureChipClass(key) {
      if (key == 'upper') {
        return 'mdl-chip mdl-color--yellow';
      } else {
        return 'mdl-chip mdl-color--orange';
      }
    },
    termName(val) {
      return MeetingNames.term(val);
    },
    sessionName(val) {
      return MeetingNames.session(val);
    },
    sittingDayName(val) {
      return MeetingNames.sittingDay(val);
    }
  }
}
</script>

