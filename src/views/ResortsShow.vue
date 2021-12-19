<template>
  <div class="resortsShow">
    <h1>{{ message }}</h1>
    <p>{{ resort.name }}</p>
    <p>{{ resort.official_website }}</p>
    <p>{{ resort.lat }}</p>
    <p>{{ resort.lng }}</p>
    <input v-model="userInputDate" type="date">
    <!-- <b-calendar></b-calendar> -->
    <!-- <button>See dates</button> -->
    <!-- Brian helped me put a calendar straight from HTML. Time for theme. Install theme, have a functionality to save trip, implement weather data api and we're done. get this done asap. -->
  </div>
</template>

<style></style>

<script>
import axios from "axios"

export default {
  data: function () {
    return {
      message: "Welcome to Vue.js!",
      resort: [],
      userInputDate: "2021-12-06"
    };
  },
  created: function () {
    this.resortsShow();
  },
  methods: {
    resortsShow: function () {
      console.log("you are viewing one resort")
      axios.get("/resorts/" + this.$route.params.id).then(response => {
        console.log("resort data:", response.data)
        this.resort = response.data
      })
    }
  },
};
</script>