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
          <router-link
            v-else
            :to="backLink">
            <iconify-icon data-icon="mdi:arrow-left" width="1.5rem" height="1.5rem"></iconify-icon>
            Back to all results
          </router-link>
        </div>
      </header>
      <main class="mdl-layout__content transcript_page">
        <div class="content_wrapper">
           <div class="mdl-grid">
              <div class="mdl-cell mdl-cell--12-col">
                <div class="keyword_warpper mdl-shadow--2dp" v-if="keyword">
                  Keyword : <strong>{{ keyword }}</strong> {{ showPosition }}/{{ keywordCount }}
                  <button class="mdl-button mdl-js-button mdl-button--icon keyword_navigator up" v-on:click="goToResults('up')" :disabled="jump_position == -1">
                    <iconify-icon data-icon="mdi:chevron-up" width="1.5rem" height="1.5rem"></iconify-icon>
                  </button>
                  <button class="mdl-button mdl-js-button mdl-button--icon keyword_navigator down" v-on:click="goToResults('down')" :disabled="jump_position == keywordCount - 1">
                    <iconify-icon data-icon="mdi:chevron-down" width="1.5rem" height="1.5rem"></iconify-icon>
                  </button>
                </div>
              </div>
               <div class="mdl-cell mdl-cell--12-col transcript-content-wrapper">
                    <spinner v-if="loading"></spinner>
                    <h1 class="center-title">{{ this.data.title }}</h1>
                    <div class="transcript_wrapper" v-html=this.data.preface></div>
                    <div class="transcript_wrapper" id="transcript_contents" v-html=transcriptText></div>
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
//import Mark from 'mark.js/dist/mark.min.js';

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
            jump_position: -1,
            highlighted_selector: '',
            current_selector : ''
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
        goToResults(dir) {

          //var position;
          
          if (!this.highlighted_selector) {
            this.highlighted_selector = this.$el.querySelectorAll('.text-highlight');
          }

          if (dir == 'up') {
            this.jump_position--;
          } else {
            this.jump_position++;
          }

          if (this.current_selector) {
            this.current_selector.classList.remove('current');
          }

          this.current_selector = this.highlighted_selector[this.jump_position];

          this.current_selector.classList.add('current');

          this.current_selector.scrollIntoView({behavior: "smooth", block: "center"});

          /*position = this.current_selector.offset().top - 50;

          window.scrollTo(0, position);*/

        }
    },
    computed: {
      backLink() {
        if (this.keyword) {
          return { name: 'search', params: { keyword: this.keyword }}
        } else {
          return { name: 'browse', params: {legislature: this.data.legislature, term: this.data.term, session: this.data.session} }
        }
      },
      transcriptText() {
        const transcript = this.data.transcript;

        if (this.keyword) {
          const query = this.keyword;

          /*var instance = new Mark('#transcript_contents');

          return instance.mark(query);*/

          var result = searchTextHl.highlight(transcript, query);

          return result;  
        }
        return transcript;
      },
      keywordCount() {
        return (this.transcriptText.match(/text-highlight/g) || []).length;
      },
      showPosition() {
        return this.jump_position + 1;
      }
    },
    /*filters: {
      highlight: function(value) {
        const query = this.keyword;
        const MarkInstance = new Mark(value);
        return MarkInstance.mark(query);
      }
    }*/
}

</script>