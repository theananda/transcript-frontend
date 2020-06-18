<template>
    <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
      <header class="mdl-layout__header">
        <div class="mdl-layout__header-row">
          <router-link
              v-if="$routerHistory.hasPrevious()"
              :to="{ path: $routerHistory.previous().path }">
              <iconify-icon data-icon="mdi:arrow-left" width="1.5rem" height="1.5rem"></iconify-icon>
              ရှာဖွေတွေ့ရှိမှု အားလုံးသို့ပြန်သွားရန်
          </router-link>
          <router-link
            v-else
            :to="backLink">
            <iconify-icon data-icon="mdi:arrow-left" width="1.5rem" height="1.5rem"></iconify-icon>
            ရှာဖွေတွေ့ရှိမှု အားလုံးသို့ပြန်သွားရန်
          </router-link>
          <!-- Add spacer, to align navigation to the right --> 
          <div class="mdl-layout-spacer"></div>
          <a :href="downloadLink" target="_blank">
            <iconify-icon data-icon="mdi:file-download" width="1.5rem" height="1.5rem"></iconify-icon> 
            <span class="mdl-layout--large-screen-only">မူရင်းအစည်းအဝေးမှတ်တမ်းဖိုင်ရယူရန်</span>
          </a>
        </div>
      </header>
      <main class="mdl-layout__content transcript_page">
        <div class="content_wrapper">
           <div class="mdl-grid">
              <div class="mdl-cell mdl-cell--12-col">
                <div class="keyword_warpper mdl-shadow--2dp" v-if="keyword">
                  ရှာဖွေထားသောစကားလုံး : <strong>{{ keyword }}</strong> {{ showPosition }}/{{ keywordCount }}
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
                    <div class="transcript_wrapper" id="transcript_contents" v-for="section in transcriptText">
                      <h1>{{ section.type }}</h1>
                      <div class="transcript_section" v-html="section.content"></div>
                    </div>
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
            data: {
              transcript: []
            },
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

        }
        /*getHighlightedText(text) {
          return searchTextHl.highlight(text, this.keyword);
        }*/
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

        if (this.keyword) {

          var result = this.data.transcript.map(section => {

            section.content = searchTextHl.highlight(section.content, this.keyword);

            return section;

          });

          return result;  
        }

        return this.data.transcript;

      },
      keywordCount() {
        //need to search for highlighted text count
        var keyCount = 0;

        for (var i = 0; i < this.transcriptText.length; i++) {
          keyCount += (this.transcriptText[i].content.match(/text-highlight/g) || []).length; 
        }
        
        return keyCount;
      },
      showPosition() {
        return this.jump_position + 1;
      },
      downloadLink() {
        return config.pdf_download_source + this.data.legislature + '/' + this.data.term + '/' + this.data.session + '/' + this.data.pdf_filename;
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