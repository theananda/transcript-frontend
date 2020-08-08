<template>
    <div class="content_wrapper mdl-grid">
        <div class="mdl-cell mdl-cell--12-col legislature_wrapper" v-for="meeting in meetings" v-bind:key="meeting.legislature">
            <div class="mdl-grid">
                <div class="mdl-cell mdl-cell--12-col">
                    <h2>{{ getMeetingName('legislature', meeting.legislature) }}</h2>
                </div>
                <div class="mdl-cell mdl-cell--12-col">
                    <div class="term_wrapper" v-for="term in meeting.terms" v-bind:key="term.number">
                        <h4>{{ getMeetingName('term', term.number) }}</h4>
                        <div class="mdl-grid">
                            <div class="mdl-cell mdl-cell--4-col" v-for="session in term.sessions" v-bind:key="session">
                                <router-link :to="{name: 'browse', 
                                                    params: {legislature: meeting.legislature, 
                                                    term: term.number, 
                                                    session: session}}">
                                    {{ getMeetingName('session', session) }}
                                </router-link>
                            </div>      
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import Axios from 'axios'
import config from '@/config/index.js'
import MeetingNames from '@/helpers/MeetingNames.js'

export default {
    name: 'ByLegislature',
    data() {
        return {
            meetings : [
                {
                    legislature: 'upper',
                    terms : [
                        {
                            number : 1,
                            sessions : [1,2,3,4,5,6,7,8,9,10,11,12,13]
                        },
                        {
                            number : 2,
                            sessions : [1,2,3,4,5,6,7,8,9,10,11,12,13,14]
                        }
                    ]
                },
                {
                    legislature: 'lower',
                    terms : [
                        {
                            number : 1,
                            sessions : [1,2,3,4,5,6,7,8,9,10,11,12,13]
                        },
                        {
                            number : 2,
                            sessions : [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
                        }
                    ]
                },
                {
                    legislature: 'union',
                    terms : [
                        {
                            number: 2,
                            sessions: [1,2,3,4,5,6,7,8,9,10,11,12,13,14]
                        }
                    ]
                }
            ]
        }
    },
    methods: {
        getSessions(varlegi, varterm) {
            const api_url = config.api_url + '/meetings/session';
            Axios.get(api_url, {
                params : {
                    legislature : varlegi,
                    term : varterm
                }
            })
                .then(
                    (response) => {
                        return response.data;
                    }
                );
        },
        getMeetingName(type, val) {
            if (type === 'legislature') {
                return MeetingNames.legislature(val);
            } else if (type === 'term') {
                return MeetingNames.term(val);
            } else {
                return MeetingNames.session(val);
            }
        }
    }
}

</script>