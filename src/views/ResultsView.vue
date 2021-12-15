<template>
  <div class="results">
    <h1>{{ message }}</h1>
    <p>You searched: {{ searchQuery }}</p>
    <div v-for="result in results" v-bind:key="result.id">
    <div> name: {{result.name}} </div>
    <div> resort id: {{result.id}} </div>
    <div> distance: {{result.distance}} </div>
    <div> official_website: {{result.official_website}} </div>
    <div> lat: {{result.lat}} </div>
    <div> lng: {{result.lng}} </div>
    <button v-on:click="resortsShow(result.id)">See more info</button>
    <hr>
    </div>
  </div>
</template>

<style></style>

<script>
import axios from "axios"

export default {
  data: function () {
    return {
      message: "Welcome to the Results page",
      searchQuery: [],
      results: []
    };
  },
  created: function () {
    this.searchQueryGetter();
    this.displayResults();
  },
  methods: {
    searchQueryGetter: function() {
      console.log("query:", this.$route.query.address)
      this.searchQuery = this.$route.query.address
    },
    displayResults: function() {
      axios.get("/nearby_resorts?address=" + this.searchQuery).then(response => {
        console.log("search results:", response.data);
        this.results = response.data
      })
    },
    resortsShow: function(resultId) {
      console.log("resort id:", resultId)
      this.$router.push("/resorts/" + resultId);
    }
  },
};
</script>