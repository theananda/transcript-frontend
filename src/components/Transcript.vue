<template>
    <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
      <header class="mdl-layout__header">
        <div class="mdl-layout__header-row">
          <router-link
              v-if="$routerHistory.hasPrevious()"
              :to="{ path: $routerHistory.previous().path }">
              <iconify-icon data-icon="mdi:arrow-left" width="1.5rem" height="1.5rem"></iconify-icon>
              Back to all results
          </router-link>
        </div>
      </header>
      <main class="mdl-layout__content transcript_page">
        <div class="page-content">
           <div class="mdl-grid">
              <div class="mdl-cell mdl-cell--12-col">
                <div class="keyword_warpper" v-if="keyword">
                  Keyword : <strong>{{ keyword }}</strong> 1/{{ keywordCount }}
                  <a href="#">
                    <iconify-icon data-icon="mdi:chevron-up" width="1.5rem" height="1.5rem"></iconify-icon>
                  </a>
                  <a href="#">
                    <iconify-icon data-icon="mdi:chevron-down" width="1.5rem" height="1.5rem"></iconify-icon>
                  </a>
                </div>
              </div>
               <div class="mdl-cell mdl-cell--12-col">
                    <spinner v-if="loading"></spinner>
                    <h1 class="center-title">{{ this.data.title }}</h1>
                    <div class="transcript_wrapper" v-html=this.data.preface></div>
                    <div class="transcript_wrapper" v-html=transcriptText></div>
                    <div class="transcript_wrapper" v-html=this.data.postface></div>
               </div>
           </div>
        </div>
        <site-footer></site-footer>
      </main>
    </div>
</template>

<script>

import Axios from 'axios'
import config from '@/config/index.js'
import {Jumper} from 'vue-loading-spinner'
import searchTextHl from 'search-text-highlight'
import SiteFooter from '@/components/partials/Footer'

export default {
    name: 'Transcript',
    components: {
      'spinner' : Jumper,
      'site-footer' : SiteFooter
    },
    data() {
        return {
            id : this.$route.params.id,
            data: {},
            keyword: this.$route.params.keyword,
            loading: true,
            jump_position: 1
        }
    },
    mounted() {
        this.getData();
    },
    methods: {
        getData() {
            const api_url = config.api_url + "/transcript/" + this.id;
            Axios.get(api_url)
              .then(response => {
                this.data = response.data;
                this.loading = false;
            });
        },
        /*goToResults(dir) {

          var selector = this.$el.querySelector('qasection');
          selector.scrollTop;
        }*/
    },
    computed: {
      backLink() {
        if (this.keyword) {
          return { name: 'search', params: { keyword: this.keyword }}
        } else {
          return { name: 'home' }
        }
      },
      transcriptText() {
        const transcript = this.data.transcript;

        if (this.keyword) {
          const query = this.keyword;
          var result = searchTextHl.highlight(transcript, query);
          return result;  
        }
        return transcript;
      },
      keywordCount() {
        return (this.transcriptText.match(/text-highlight/g) || []).length;
      }

    }
}

</script>