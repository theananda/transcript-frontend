<template>
    <div class="mdl-grid">
        <div class="mdl-cell mdl-cell--3-col mdl-cell--4-col-tablet mdl-cell--4-col-phone" v-for="transcript in tdata" v-bind:key="transcript._id">
            <div class="mdl-card mdl-shadow--4dp single-result">
                <span :class="getLegislatureChipClass(transcript.legislature)">
                  <span class="mdl-chip__text">{{ getLegislatureName(transcript.legislature) }}</span>
                </span>
                <p class="date-info">
                  <iconify-icon data-icon="mdi:calendar" width="1.5rem" height="1.5rem"></iconify-icon>
                  <span>{{ transcript.date.org_txt }}</span>
                </p>
                <router-link :to="{ name: 'transcript', params: { id: transcript._id }}">
                  <h5 class="title" v-if="transcript.sitting_day">
                    {{ termName(transcript.term) }} <br/>
                    {{ sessionName(transcript.session) }}<br/>
                    {{ sittingDayName(transcript.sitting_day) }}
                  </h5>
                  <h5 class="title" v-else>{{ transcript.title }}</h5>
                </router-link>
                <div class="content_type_wrapper">
                  <span class="mdl-chip" v-for="type in transcript.content_types" style="width:fit-content; margin-right:10px;">
                      <span class="mdl-chip__text">{{ type }}</span>
                  </span>
                </div>
            </div>
        </div> 
    </div> 
</template>

<script>

import MeetingNames from '@/helpers/MeetingNames.js'

export default {
    name: 'TranscriptCard',
    props: [
        'tdata'
    ],
    methods: {
        getLegislatureName(key) {
            return MeetingNames.legislature(key);
        },
        getLegislatureChipClass(key) {
          if (key == 'upper') {
            return 'mdl-chip mdl-color--yellow';
          } else if (key == 'lower') {
            return 'mdl-chip mdl-color--orange';
          } else {
            return 'mdl-chip mdl-color--red';
          }
        },
        termName(val) {
          return MeetingNames.term(val);
        },
        sessionName(val) {
          return MeetingNames.session(val);
        },
        sittingDayName(val) {
          return MeetingNames.sittingDay(val);
        }
    }
}

</script>