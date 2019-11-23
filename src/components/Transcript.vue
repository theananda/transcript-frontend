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
            Keyword : <strong>{{ keyword }}</strong>
          </div>
        </div>
      </header>
      <main class="mdl-layout__content transcript_page">
        <div class="page-content">
           <div class="mdl-grid">
               <div class="mdl-cell mdl-cell--12-col">
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

export default {
    name: 'Transcript',
    data() {
        return {
            id : this.$route.params.id,
            data: {},
            keyword: this.$route.params.keyword
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
            });
        }
    }
}

</script>