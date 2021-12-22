<template>
  <div class="resortsShow">
    <h1>{{ message }}</h1>
    <p>{{ placeDetailsResult.name }}</p>
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
      message: "Welcome to the Place Details Page",
      placeDetailsResult: [],
      userInputDate: ""
    };
  },
  created: function () {
    this.placeDetails();
  },
  methods: {
    placeDetails: function () {
      console.log("you are viewing one resort", this.$route)
      axios.get(`${this.$route.fullPath}`).then(response => {
        console.log("results:", response.data);
        this.placeDetailsResult = response.data
      });
      // console.log(this.$route)
      // axios.get("/resorts/" + this.$route.params.id).then(response => {
      //   console.log("resort data:", response.data)
      //   this.resort = response.data
      // })
    }
  },
};
</script>