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
    };
  },
  
  created: function () {},
  methods: {
    search: function () {
      // axios.get("/nearby_resorts?address=" + this.searchQuery).then(response => {
      axios.get(`/nearby_resorts?address=${this.searchQuery}`).then(response => {
        console.log(response.data);
        this.$router.push("/nearby_resorts?address=" + this.searchQuery);
      })
    }
  },
};
</script>