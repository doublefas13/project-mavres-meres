<template>
  <Suspense>
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <template #fallback>
      <div>loading...</div>
    </template>
  </Suspense>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
};
</script>

<style></style>
