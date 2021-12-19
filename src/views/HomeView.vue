<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <!-- <div v-for="resort in resorts" v-bind:key="resort.id">
    <div> {{resort.name}} </div>
    <div> {{resort.official_website}} </div>
    <div> {{resort.lat}} </div>
    <div> {{resort.lng}} </div>
    <hr>
    </div> -->
  </div>
</template>

<style></style>

<script>
import axios from "axios";
  export default {
    data: function () {
      return {
        message: "Welcome to Resorts Index",
        resorts: []
      };
    },
    created: function () {
      this.indexResorts();
    },
    methods: {
      indexResorts: function() {
        axios.get("/resorts").then((response) => {
          console.log("you are in resorts index", response);
          this.resorts = response.data
        })
      }
    },
  };
</script>
