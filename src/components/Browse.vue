<template>
    <div class="content_wrapper mdl-grid">
        <div class="mdl-cell mdl-cell--12-col">
            <router-link
              :to="{ name: 'home' }">
              <iconify-icon data-icon="mdi:arrow-left" width="1.5rem" height="1.5rem"></iconify-icon>
              Back to home
          </router-link>
            <h2>{{ pageTitle }}</h2>    
            <spinner v-if="loading"></spinner>
        </div>
        <div class="mdl-cell mdl-cell--3-col mdl-cell--4-col-tablet mdl-cell--4-col-phone" v-for="result in results" v-bind:key="result._id">
            <div class="mdl-card mdl-shadow--4dp single-result">
              <p class="date-info">
                <iconify-icon data-icon="mdi:calendar" width="1.5rem" height="1.5rem"></iconify-icon>
                <span>{{ result.date.org_txt }}</span>
              </p>
              <router-link :to="{ name: 'transcript', params: { id: result._id }}">
                <h5 class="title" v-if="result.sitting_day">
                {{ sittingDayName(result.sitting_day) }}</h5>
                <h5 class="title" v-else>{{ result.title }}</h5>
              </router-link>
              <div class="content_type_wrapper">
                <span class="mdl-chip" v-for="type in result.content_types" style="width:fit-content; margin-right:10px;">
                    <span class="mdl-chip__text">{{ type }}</span>
                </span>
              </div>
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
            loading: true,
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
        },
        sittingDayName(val) {
          return MeetingNames.sittingDay(val);
        }
    },
    computed: {
        pageTitle() {
            return MeetingNames.legislature(this.legislature) + " " + MeetingNames.term(this.term) + " " + MeetingNames.session(this.session);
        }
    }
}

</script>