<template>
  <div class="search">
    <h1>{{ message }}</h1>
    <p><input v-model="searchQuery"></p>
    <p><button v-on:click="search()">Search!</button></p>
  </div>
</template>

<style></style>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      message: "Welcome to the Search Page",
      searchQuery: "Enter a city name or address",
      lat: "",
      lng: ""
    };
  },
  
  created: function () {},
  methods: {
    search: function () {
      // axios.get("/nearby_resorts?address=" + this.searchQuery).then(response => {
      axios.get(`/get_location?address=${this.searchQuery}`).then(response => {
        console.log(response.data);
        this.lat = response.data["lat"];
        this.lng = response.data["lng"];
        console.log(this.lat,this.lng);
        // this.$router.push("/nearby_resorts?address=" + this.searchQuery);
        axios.get(`/nearby_search?location=${this.lat},${this.lng}`).then(response => {
          console.log(response.data);
        });
      });
    }
  },
};
</script>