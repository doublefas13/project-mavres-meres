<template>
  <div class="mb-2 border-b border-gray-500">
    <header
      class="container mx-auto flex flex-wrap items-center justify-between py-2 sm:flex-nowrap"
    >
      <strong class="w-1/2 sm:w-auto"
        ><router-link
          to="/"
          class="bg-[#6f00fe] text-white p-2.5 rounded-3xl hover:bg-red-700"
        >
          MOUFASHOP</router-link
        ></strong
      >
      <div
        class="order-last mt-4 w-full flex-grow sm:order-none sm:mx-6 sm:mt-0"
      >
        <span class="p-input-icon-left w-full">
          <i class="pi pi-search" />
          <InputText
            class="w-full rounded-xl border-[#6f00ff]"
            type="text"
            placeholder="Search"
            @input="resultsSearch"
            v-model="searchText"
          />
        </span>
      </div>
      <div
        class="flex w-1/2 flex-none items-center justify-end sm:w-auto space-x-4"
      >
        <router-link
          class="rounded-full hover:bg-black-500 hover:bg-opacity-10"
          to="/crud"
        >
          <a
            class="flex items-center rounded-full pl-2 hover:bg-black-500 hover:bg-opacity-10"
            href="/login/"
            ><div class="flex flex-col text-right">
              <span class="text-xs leading-none">Hello</span
              ><span class="text-sm font-bold leading-none">Login</span>
            </div>
            <i class="pi pi-user ml-4">
              <path
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"
              ></path></i></a></router-link
        ><router-link
          class="rounded-full hover:bg-black-500 hover:bg-opacity-10"
          to="/cart"
        >
          <i class="pi pi-shopping-cart">
            <title>Your cart</title>
            <path
              d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"
            ></path>
            <span
              class="text-lg text-white mx-1 bg-[#6f00ff] p-[3px] rounded-full font-bold"
              v-if="cartCount != 0"
            >
              {{ cartCount }}</span
            >
          </i></router-link
        >
      </div>
    </header>
  </div>
</template>

<script setup>
import InputText from "primevue/inputtext";
import { useStore } from "vuex";
import { computed, ref } from "vue";

const searchText = ref("");
const store = useStore();
const cartCount = computed(() => {
  return store.getters["getCartItemsLength"];
});

const resultsSearch = () => {
  store.commit("setSearchText", searchText.value);
};
</script>
<style></style>
