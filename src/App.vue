<template>
  <headerComponent></headerComponent>
  <div class="flex-1"><router-view /></div>
  <footerComponent></footerComponent>
</template>
<script setup>
import headerComponent from "./components/headerComponent.vue";
import footerComponent from "./components/footerComponent.vue";
import { onMounted } from "vue";
import { useStore } from "vuex";

const store = useStore();

onMounted(() => {
  if (localStorage.getItem("cartItems")) {
    store.commit(
      "setAllCartItems",
      JSON.parse(localStorage.getItem("cartItems"))
    );
  }
});

store.dispatch("fetchProducts");
</script>
<style></style>
