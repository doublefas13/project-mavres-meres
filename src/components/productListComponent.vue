<template>
  <strong class="flex justify-center m-0 my-3"
    >{{ products.length }} results</strong
  >
  <div>
    <button @click="create">fff</button>
    <h5>Price Sorting</h5>
    <Dropdown
      v-model="dropDownOption"
      :options="sortingOptions"
      placeholder="Select an option"
      optionLabel="name"
      optionValue="value"
      @change="fetchProducts"
    />
  </div>
  <div class="flex flex-row container justify-center g-1 my-3 m-auto">
    <div class="bg-[#f3f7fa] h-fit p-3">
      <strong v-if="productsCategories != 0" class="fond-bold text-lg"
        >Category</strong
      >

      <strong v-else class="fond-bold text-lg">no items found</strong>
      <div class="flex flex-col gap-2 mt-2">
        <a
          :class="{
            'underline bold text-[#6f00fe]': !activeCategory,
          }"
          class="cursor-pointer hover:underline"
          @click="fetchProducts"
          >all</a
        >
        <a
          :class="{ 'underline bold text-[#6f00fe]': activeCategory == item }"
          class="cursor-pointer hover:underline"
          @click="fetchProductsByCategory(item)"
          v-for="item in productsCategories"
          :key="item"
        >
          {{ item }}
        </a>
      </div>
    </div>
    <div
      class="gap-3 grid ml-3 flex-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-col-4 grid-cols-1"
    >
      <ol v-for="item in products" :key="item.id" class="max-w-[352px]">
        <li
          class="flex flex-col p-4 gap-2 m-0 flex-wrap justify-between items-center border-1 shadow-md rounded-md min-h-[480px] cursor-pointer"
        >
          <div
            class="bg-contain bg-center bg-no-repeat"
            @click="selectedProduct(item)"
            :style="{
              'background-image': `url(${item.image})`,
              width: '200px',
              height: '200px',
            }"
          ></div>
          <div
            @click="selectedProduct(item)"
            class="text-black hover:text-purple-500 cursor-pointer text-center"
          >
            {{ item.title }}
          </div>
          <div>
            <Rating class="" v-model="item.rating.rate" :cancel="false" />
          </div>

          <div class="font-bold">price: {{ item.price }} $</div>
          <form action="#" class="flex gap-2">
            <div class="flex-1 rounded border bg-gray-200 text-sm">
              <label class="sr-only" for="quantity-H63EAqBHV5">Quantity</label
              ><input
                name="quantity"
                class="w-full rounded-t py-2 pl-2 leading-none shadow-inner"
                id="quantity-H63EAqBHV5"
                type="number"
                min="1"
                max="1807"
                required=""
                :value="getQuantity(item)"
                @change="item.quantity = $event.target.value"
              />
            </div>
            <button
              @click="addToCart(item)"
              aria-busy="false"
              type="button"
              class="flex cursor-pointer items-center justify-center gap-1 rounded-lg px-6 py-[0.625rem] font-medium hover:shadow focus:outline focus:outline-2 focus:outline-offset-1 focus:outline-info-400 active:shadow-[inset_0_4px_4px_rgba(0,0,0,0.25)] active:outline active:outline-1 active:outline-offset-1 disabled:pointer-events-none disabled:text-black-300 border border-purple-600 bg-transparent text-purple-600 hover:bg-purple-100 focus:bg-purple-100 active:border-purple-800 active:bg-white active:text-purple-800 disabled:border-black-300 px-3"
            >
              <svg
                class="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 0 24 24"
                width="24px"
                fill="#FFFFFF"
                role="img"
              >
                <title>Add to cart</title>
                <path
                  d="M11 9h2V6h3V4h-3V1h-2v3H8v2h3v3zm-4 9c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zm-9.83-3.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.86-7.01L19.42 4h-.01l-1.1 2-2.76 5H8.53l-.13-.27L6.16 6l-.95-2-.94-2H1v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.13 0-.25-.11-.25-.25z"
                ></path>
              </svg>
            </button>
          </form>
        </li>
      </ol>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import Rating from "primevue/rating";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import Dropdown from "primevue/dropdown";

const store = useStore();
const router = useRouter();

const sortingOptions = [
  { name: "all", value: "" },
  { name: "higher to lower", value: "desc" },
  { name: "lower to higher", value: "asc" },
];
const dropDownOption = ref("");
const productsCategories = ref([]);
const products = computed(() => {
  return store.getters["getFilterItems"];
});

const activeCategory = computed(() => {
  return store.getters["getActiveCategory"];
});

const addToCart = (item) => {
  store.commit("setCartItems", {
    product: item,
    quantity: item.quantity || 1,
  });
};

const create = () => {
  store.dispatch("createProduct");
};

const selectedProduct = (item) => {
  store.dispatch("setSelectedItem", item);
  router.push(`/product/${item.id}`);
};

onMounted(async () => {
  await fetchProducts();

  products.value.map((item) => {
    if (!~productsCategories.value.indexOf(item.category)) {
      productsCategories.value.push(item.category);
    }
  });
});

const fetchProducts = () => {
  return store.dispatch("fetchProducts", dropDownOption.value);
};

const fetchProductsByCategory = (category) => {
  return store.dispatch("fetchProductsByCategory", category);
};

const getQuantity = (item) => {
  return item.quantity || 1;
};
</script>

<style>
.pi-star-fill:before {
  color: #6f00fe !important;
}
</style>
