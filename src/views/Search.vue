<template>
  <div class="search">
    <h1>{{ message }}</h1>
    <p><input v-model="search_message"></p>
    <p><button v-on:click="neabyResorts">Search!</button></p>

    <!-- YOU LEFT OFF HERE. ADD A WAY TO LINK THE SEARCH QUERY TO YOUR API TO RETURN YOUR RESULTS AND DISPLAY TO USER. THEN WE NEED TO ADD THE TRIPS. NOT CLOSE BUT SOMEWHAT CLOSE. -->
  </div>
</template>

<style></style>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      message: "Welcome to the Search Page",
      search_message: "Enter a city name or address"
    };
  },
  created: function () {},
  methods: {},
};
</script>