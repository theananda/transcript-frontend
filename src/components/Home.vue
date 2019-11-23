<template>
  <div class="container">
    <div class="large_search_area">
      <h2>Paliament Transcript</h2>
      <input type="text" name="search" id="keyword_search" v-model="keyword"> 
      <button class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored" v-on:click="search">Search</button> 
    </div>
    <div class="mdl-grid">
      <div class="mdl-cell mdl-cell--12-col">
        <div class="results_wrapper">Search Keyword : {{keyword}}</div>
        <div class="results_count">Results : {{ result_count }}</div>
      </div>
      <div class="mdl-cell mdl-cell--3-col" v-for="result in results" v-bind:key="result._id">
          <div class="mdl-card mdl-shadow--4dp single-result">
            <router-link :to="{ name: 'search_transcript', params: { id: result._id, keyword: keyword }}">
              <h5 class="title">{{ result.title }}</h5>
            </router-link>
          </div>  
      </div>
    </div>
  </div>
</template>

<script>

import Axios from 'axios'
import config from '@/config/index.js'

export default {
  name: 'Home',
  data () {
    return {
      keyword: '',
      results: [],
      result_count: 0
    }
  },
  beforeMount() {
    if (this.$route.params.keyword) {
      this.keyword = this.$route.params.keyword;
      this.getResult();
    }
  },
  watch: {
    /*keyword() {
      this.getResult();
    }*/
  },
  methods: {
    getResult() {
      const api_url = config.api_url + "/transcripts?keyword=" + this.keyword;
      Axios.get(api_url)
        .then(response => {
          this.results = response.data.data;
          this.result_count = response.data.count;
      });
    },
    search() {
      this.$router.push({ 
        name: 'search', 
        params: { 
          keyword: this.keyword
        } 
      });
      this.getResult();
    } 
  }
}
</script>

