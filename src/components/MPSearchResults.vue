<template>
    <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
        <header class="mdl-layout__header">
            <div class="mdl-layout__header-row">
                <router-link :to="{ name: 'home' }">
                    <iconify-icon data-icon="mdi:arrow-left" width="1.5rem" height="1.5rem"></iconify-icon>
                    မူလ စာမျက်နှာသို့ ပြန်သွားရန်
                </router-link>
            </div>
        </header>
        <main class="mdl-layout__content mp_search_page">
            <div class="mp-info-wrapper">
                <spinner v-if="loading"></spinner>
                <h2 class="mdl-color-text--white">{{ mp_info.title }}{{ mp_info.full_name }}</h2>
                <p>{{ MPParty }}</p>
                <p>{{ MPConstituency }}</p>
                <a target="_blank" v-if="mp_info.OHID" :href="getOHLink" class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored">View Detail in OpenHluttaw</a>
            </div>
            <div class="results-wrapper">
                <div class="result-info">Total : {{ result_count }}</div>
                <transcript-card :tdata="transcripts" v-if="transcripts.length" />
                <infinite-loading :identifier="infiniteId" @infinite="infiniteHandler"></infinite-loading>    
            </div>
            <site-footer></site-footer>     
        </main>
    </div>
    
</template>

<script>

import Axios from 'axios'
import config from '@/config/index.js'
import {Jumper} from 'vue-loading-spinner'
import SiteFooter from '@/components/partials/Footer'
import TranscriptCard from '@/components/partials/TranscriptCard.vue'
import InfiniteLoading from 'vue-infinite-loading'

export default {
    name: 'MPSearchResults',
    components: {
        'spinner' : Jumper,
        'site-footer' : SiteFooter,
        'transcript-card' : TranscriptCard,
        'infinite-loading' : InfiniteLoading
    },
    data() {
        return {
            loading: true,
            mp_info : {},
            mp_id : this.$route.params.mp_id,
            transcripts : [],
            infiniteId: +new Date(),
            result_count: '',
            error: '',
            show_no_result: false,
            page: 1
        }
    },
    mounted() {
        this.getData();
    },
    methods: {
        getData() {
            const MpData = Axios.get(config.mp_api_url + '/mp/' + this.mp_id);

            Promise.all([MpData]).then(results => {
                this.mp_info = results[0].data;
                this.loading = false;
            });

        },
        infiniteHandler($state) {
          Axios.get(config.api_url + '/transcripts/search-by-mp', {
              params: {
                  mp_id : this.mp_id,
                  page: this.page
              }
          }).then(
            (response) => {
              if (response.data.data.length) {
                this.page += 1; 
                this.result_count = response.data.pagination.total;
                this.transcripts.push(...response.data.data);
                $state.loaded();
              } else {
                $state.complete();
              }
            },
            (error) => {
              this.error = error;
            }
          );
        }
    },
    computed: {
        MPParty() {
            const { first_term, second_term } = this.mp_info.history;

            if (second_term.party) {
                return second_term.party;
            }
            return first_term.party;
        },
        MPConstituency(){

            const { first_term, second_term } = this.mp_info.history;

            if (second_term.constituency) {
                return second_term.hluttaw + '၊ ' + second_term.region + '၊ ' + second_term.constituency;
            }
            return first_term.hluttaw + '၊ ' + first_term.region + '၊ ' + first_term.constituency;
        },
        getOHLink() {
            return 'http://www.openhluttaw.info/my_MM/person-detail/?personId=' + this.mp_info.OHID;
        }
    }
}
</script>

<style>
    .results-wrapper {
        min-height: 50vh;
    }
</style>