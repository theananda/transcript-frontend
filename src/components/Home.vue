<template>
  <div class="container">
    <div class="large_search_area">
      <h2>လွှတ်တော်အစည်းအဝေး မှတ်တမ်းများ</h2>
      <div class="alpha_label">[ Alpha Version ]</div>
      <input type="text" name="search" id="keyword_search" v-model="keyword" @keyup.enter="search"> 
      <button class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored" v-on:click="search">Search</button> 
      <div class="alpha">ယခု website သည် စမ်းသပ်ဆဲကာလဖြစ်သောကြောင့် အဆင်မပြေမှုများရှိပါက တောင်းပန်အပ်ပါသည်။</div>
      <div class="error">
        <span class="mdl-chip mdl-color--red" v-if="error">
          <span class="mdl-chip__text mdl-color-text--white">{{ error }}</span>
        </span>
      </div>
      <span class="bg_attr">
        Photo by Aung Htun Linn  
      </span> 
    </div>
    <legislature v-if="this.$route.name == 'home'"/>
    <browse v-if="this.$route.name == 'browse'"/>
    <div class="mdl-grid" v-if="this.$route.name == 'search'">
      <div class="mdl-cell mdl-cell--12-col">
        <div class="results_wrapper">Search Keyword : {{keyword}}</div>
        <div class="results_count">Results : {{ result_count }}</div>
      </div>
      <spinner v-if="loading"></spinner>
      <div class="mdl-cell mdl-cell--12-col" v-if="show_no_result">No Results Found!</div>
      <div class="mdl-cell mdl-cell--3-col mdl-cell--4-col-tablet mdl-cell--12-col-phone" v-for="result in results" v-bind:key="result._id">
          <div class="mdl-card mdl-shadow--4dp single-result">
            <router-link :to="{ name: 'search_transcript', params: { id: result._id, keyword: keyword }}">
              <span :class="getLegislatureChipClass(result.legislature)">
                <span class="mdl-chip__text">{{ getLegislatureName(result.legislature) }}</span>
              </span>
              <h5 class="title">{{ result.title }}</h5>
            </router-link>
          </div>  
      </div>
      <infinite-loading @infinite="infiniteHandler"></infinite-loading>
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
      legislatures : {
        'all' : 'လွှတ်တော်အားလုံး',
        'lower' : 'ပြည်သူ့လွှတ်တော်',
        'upper' : 'အမျိုးသားလွှတ်တော်'
      }
    }
  },
  beforeMount() {
    if (this.$route.params.keyword) {
      this.keyword = this.$route.params.keyword;
      this.loading = true;
      this.getResult();
    } else {
      this.keyword = '';
    }
  },
  watch: {
    /*keyword() {
      this.getResult();
    }*/
  },
  methods: {
    getResult() {
      this.keyword = this.keyword.trim();
      const api_url = config.api_url + "/transcripts/search?keyword=" + this.keyword;
      Axios.get(api_url)
        .then(
          (response) => {
            this.results = response.data.data;
            this.result_count = response.data.pagination.total;
            this.loading = false;
            if (response.data.count == 0) {
              this.show_no_result = true;
            }
          },
          (error) => {
            this.error = error;
          }
      );
    },
    search() {
      this.$router.push({ 
        name: 'search', 
        params: { 
          keyword: this.keyword
        } 
      });
      this.loading = true;
      this.resetResults();
      this.getResult();
    },
    resetResults() {
      this.results = [];
      this.error = '';
      this.result_count = 0;
      this.show_no_result = false;
    },
    infiniteHandler($state) {
      const api_url = config.api_url + "/transcripts/search?keyword=" + this.keyword;
      Axios.get(api_url, {
        params: {
          page: this.page,
        },
      }).then(
        (response) => {
          if (response.data.data.length) {
            this.page += 1;
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
        return 'mdl-chip mdl-color--amber';
      }
    }
  }
}
</script>

