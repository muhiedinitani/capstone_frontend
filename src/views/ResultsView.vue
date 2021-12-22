<template>
  <div class="results">
    <h1>{{ message }}</h1>
    <p>You searched: {{ searchQuery }}</p>
    <div v-for="nearbySearchResult in nearbySearchResults" v-bind:key="nearbySearchResult.id">
    <div> name: {{nearbySearchResult.name}} </div>
    <div> place_id: {{nearbySearchResult.place_id}} </div>
    <div> rating: {{nearbySearchResult.rating}} stars </div>
    <img src="https://www.planetware.com/photos-large/I/italy-skiing-skies-and-mountains.jpg">
    <p></p>
    <button v-on:click="placeDetails(nearbySearchResult.place_id)">See more info</button>
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
      nearbySearchResults: []
    };
  },
  created: function () {
    this.searchQueryGetter();
    this.nearbySearch();
  },
  methods: {
    searchQueryGetter: function() {
      console.log("query:", this.$route.query.location)
      this.searchQuery = this.$route.query.location
    },
    nearbySearch: function() {
      axios.get(`/nearby_search?location=${this.searchQuery}`).then(response => {
        console.log("nearby search results:", response.data);
        this.nearbySearchResults = response.data
      });
    },
    placeDetails: function(place_id) {
      console.log("place_id:", place_id)
      this.$router.push(`/place_details?place_id=${place_id}`);
    }
  },
};
</script>