<template>
    <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
      <header class="mdl-layout__header">
        <div class="mdl-layout__header-row">
          <router-link :to="{ name: 'search', params: { keyword: keyword }}">
            <iconify-icon data-icon="mdi:arrow-left" width="1.5rem" height="1.5rem"></iconify-icon>
            Back to all results
          </router-link>
          <!-- Add spacer, to align navigation to the right -->
          <div class="mdl-layout-spacer"></div>
          <div class="search_warpper" v-if="keyword">
            Keyword : <strong>{{ keyword }}</strong> 1/20 
            <iconify-icon data-icon="mdi:chevron-up" width="1.5rem" height="1.5rem"></iconify-icon>
            <iconify-icon data-icon="mdi:chevron-down" width="1.5rem" height="1.5rem"></iconify-icon>
          </div>
        </div>
      </header>
      <main class="mdl-layout__content transcript_page">
        <div class="page-content">
           <div class="mdl-grid">
               <div class="mdl-cell mdl-cell--12-col">
                    <spinner v-if="loading"></spinner>
                    <h1 class="center-title">{{ this.data.title }}</h1>
                    <div class="transcript_wrapper" v-html=this.data.transcript></div>
               </div>
           </div>
        </div>
      </main>
    </div>
</template>

<script>

import Axios from 'axios'
import config from '@/config/index.js'
import {Jumper} from 'vue-loading-spinner'

export default {
    name: 'Transcript',
    components: {
      'spinner' : Jumper
    },
    data() {
        return {
            id : this.$route.params.id,
            data: {},
            keyword: this.$route.params.keyword,
            loading: true
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
        }
    }
}

</script>