<template>
  <div class="trips">
    <h1>{{ message }}</h1>
    <div v-for="trip in trips" v-bind:key="trip.id">
    <div><b>id:</b> {{trip.id}} </div>
    <div><b>resort_id:</b> {{trip.resort_id}} </div>
    <div><b>day_start:</b> {{trip.day_start}} </div>
    <div><b>day_end:</b> {{trip.day_end}} </div>
    <div><b>user_id:</b> {{trip.user_id}} </div>
    <div><b>original_query:</b> {{trip.original_query}} </div>
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
      message: "Welcome to the Trips dashboard",
      trips: [],
    };
  },
  created: function () {
    this.tripsIndex();
  },
  methods: {
    tripsIndex: function () {
      console.log("in trips index...")
      axios.get("/trips").then(response => {
        console.log("all trips:", response.data);
        this.trips = response.data
      })
    }
  },
};
</script>