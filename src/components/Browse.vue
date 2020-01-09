<template>
    <div class="content_wrapper mdl-grid">
        <spinner v-if="loading"></spinner>
        <div class="mdl-cell mdl-cell--12-col">
            <router-link
              :to="{ name: 'home' }">
              <iconify-icon data-icon="mdi:arrow-left" width="1.5rem" height="1.5rem"></iconify-icon>
              Back to home
          </router-link>
            <h2>{{ pageTitle }}</h2>    
        </div>
        <div class="mdl-cell mdl-cell--3-col mdl-cell--4-col-tablet mdl-cell--12-col-phone" v-for="result in results" v-bind:key="result._id">
            <div class="mdl-card mdl-shadow--4dp single-result">
              <router-link :to="{ name: 'transcript', params: { id: result._id }}">
                <h5 class="title">{{ result.title }}</h5>
              </router-link>
            </div>  
        </div>
    </div>
</template>

<script>

import Axios from 'axios'
import config from '@/config/index.js'
import {Jumper} from 'vue-loading-spinner'
import MeetingNames from '@/helpers/MeetingNames.js'

export default {
    name: 'Browse',
    components: {
        'spinner' : Jumper
    },
    data() {
        return {
            loading: false,
            results: [],
            legislature : this.$route.params.legislature,
            term : this.$route.params.term,
            session: this.$route.params.session,
            error: ''
        }
    },
    beforeMount() {
        this.getResult();
    },
    methods: {
        getResult() {
          const api_url = config.api_url + "/transcripts";
          Axios.get(api_url, {
            params : {
                legislature : this.legislature,
                term : this.term,
                session : this.session
            }
          })
            .then(
              (response) => {
                this.results = response.data.data;
                this.loading = false;
                if (response.data.count == 0) {
                  this.show_no_result = true;
                }
              },
              (error) => {
                this.error = error;
              }
          );
        }
    },
    computed: {
        pageTitle() {
            return MeetingNames.term(this.term) + " " + MeetingNames.legislature(this.legislature) + " " + MeetingNames.session(this.session);
        }
    }
}

</script>