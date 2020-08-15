<template>
  <div class="search_wrapper">
    <vue-autosuggest
      ref="autocomplete"
      v-model="keyword"
      :suggestions="suggestions"
      :inputProps="inputProps"
      :renderSuggestion="renderSuggestion"
      :getSuggestionValue="getSuggestionValue"
      @input="fetchResults"
      @selected="onSelected"
    />
    <button class="search-btn mdl-button mdl-js-button mdl-button--raised mdl-button--colored" v-on:click="search">ရှာဖွေပါ</button>  
  </div>
</template>

<script>
import { VueAutosuggest } from "vue-autosuggest";
import Axios from "axios";
import config from '@/config/index.js'

export default {
  name: "MPSearch",
  components: {
    VueAutosuggest
  },
  data() {
    return {
      keyword: "",
      results: [],
      timeout: null,
      selected: null,
      debounceMilliseconds: 250,
      inputProps: {
        id: "autosuggest__input",
        placeholder: "စကားစု သို့မဟုတ် လွှတ်တော်အမတ် အမည်ဖြည့် ရှာဖွေနိုင်ပါသည်။",
        class: "form-control",
        name: "search-by-mp"
      },
      suggestions: []
    };
  },
  watch: {
    keyword: function() {
      this.$emit("keyword", this.keyword);
    }
  },
  methods: {
    fetchResults() {

      const mp_api = config.mp_api_url + '/mp/search';

      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {

        Axios.get(mp_api, {
          params: {
            keyword : this.keyword
          }
        }).then((response) => {
          console.log(response.data.data);
          this.suggestions = [];
          this.suggestions.push({name: "mps", data: response.data.data});
        });
      }, this.debounceMilliseconds);

    },
    search() {
      this.$router.push({ 
        name: 'search', 
        params: { 
          keyword: this.keyword
        } 
      });
    },
    renderSuggestion(suggestion) {
      const history = suggestion.item.history;
      const party = (history.second_term.party ? history.second_term.party : history.first_term.party);
      return suggestion.item.title + suggestion.item.full_name + "၊ " + party;
    },
    getSuggestionValue(suggestion) {

      return suggestion.mp_id;
    },
    onSelected: function(item) {
      this.selected = item.item;

      this.$router.push({ 
        name: 'mp_search', 
        params: { 
          mp_id: item.item.mp_id
        } 
      });
      console.log(item);
      //Redirect to MP Result Page
    }
  }
};
</script>

<style>

.search_wrapper {
  margin-bottom: 20px;
}

#autosuggest {
  display: inline-block;
  width: 60%;
  margin-right: 30px;
}

.search-btn {
  width: 150px;
}

#autosuggest__input.autosuggest__input-open {
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

.autosuggest__results-container {
  color: #000;
  position: relative;
  width: 100%;
  margin:auto;
  text-align: left;
}

.autosuggest__results {
  font-weight: 300;
  margin: 0;
  position: absolute;
  z-index: 10000001;
  width: 100%;
  border: 1px solid #e0e0e0;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  background: white;
  padding: 0px;
  max-height: 400px;
  overflow-y: scroll;
}

.autosuggest__results ul {
  list-style: none;
  padding-left: 0;
  margin: 0;
}

.autosuggest__results .autosuggest__results-item {
  cursor: pointer;
  padding: 15px;
}

#autosuggest ul:nth-child(1) > .autosuggest__results_title {
  border-top: none;
}

.autosuggest__results .autosuggest__results-before {
  color: gray;
  font-size: 11px;
  margin-left: 0;
  padding: 15px 13px 5px;
  border-top: 1px solid lightgray;
}

.autosuggest__results .autosuggest__results-item:active,
.autosuggest__results .autosuggest__results-item:hover,
.autosuggest__results .autosuggest__results-item:focus,
.autosuggest__results
  .autosuggest__results-item.autosuggest__results-item--highlighted {
  background-color: #f6f6f6;
}
</style>
