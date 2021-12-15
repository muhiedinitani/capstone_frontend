<template>
  <div class="resortsShow">
    <h1>{{ message }}</h1>
    <h1>{{ resort }}</h1>
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