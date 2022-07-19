<template>
  <Suspense>
    <HelloWorld />
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
