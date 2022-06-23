<template>
  <header>
    <h1 class="h1-main">{{ title }}!</h1>
  </header>
  <div class="container-main">
    <div class="container-div" v-for="temp1 in mainApi" :key="temp1.id">
      <div class="image">
        <img :src="temp1.jetpack_featured_media_url" alt="" />
      </div>
      <div class="content">
        <div class="head-line" v-html="temp1.parsely.meta.headline"></div>
        <div class="post" v-html="temp1.excerpt.rendered"></div>
        <div class="div-end">
          <div>{{ temp1.date }}</div>
          <div>{{ temp1.parsely.meta.creator[0] }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const title = "MAVRES MERES";
const mainApi = ref([]);

import axios from "axios";
import { ref } from "vue";

const temp = await axios.get(`https://techcrunch.com/wp-json/wp/v2/posts`);
mainApi.value = temp.data;
console.log(mainApi.value);
</script>

<style>
html {
  background-color: #fec007;
}
.h1-main {
  display: flex;
  justify-content: center;
  padding: 1rem;
}
.container-main {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 0;
  justify-content: space-around;
}
.container-div {
  display: flex;
  flex-direction: column;
  max-width: 28%;
  max-height: 30%;
  background-color: #ffffff;
  justify-content: space-between;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 5px 5px #e6b521;
}

.content {
  padding: 1rem;
}

.div-end {
  display: flex;
  justify-content: space-between;
  color: #999da0;
}

.image {
  max-width: 100%;
  object-fit: contain;
}

img {
  width: 100%;
  height: 100%;
}

.head-line {
  font-size: large;
  font-weight: bold;
  color: #2e343a;
  display: flex;
  justify-content: center;
}

.post {
  color: #999da0;
}

.wp-caption {
  width: fit-content !important;
}

.youtube-player {
  width: fit-content !important;
  padding: 0;
  margin: 0;
}
</style>
