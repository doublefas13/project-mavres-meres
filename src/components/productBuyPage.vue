<template>
  <div class="flex flex-row justify-center my-3 mx-0 gap-2">
    <div
      class="flex justify-center items-center border-1 shadow-md rounded-md p-4 w-[33%]"
    >
      <div
        class="bg-contain bg-center bg-no-repeat"
        :style="{
          'background-image': `url(${selectedProduct.image})`,
          width: '400px',
          height: '400px',
        }"
      ></div>
    </div>

    <div class="border-1 shadow-md rounded-md p-4 w-[33%]">
      <strong class="flex items-start justify-center">
        {{ selectedProduct.title }}</strong
      >
      <div class="flex flex-col gap-10 mt-3 justify-evenly items-center">
        <div class="flex flex-row">
          <Rating
            class="px-1"
            :modelValue="selectedProduct.rating?.rate"
            :readonly="true"
            :stars="5"
            :cancel="false"
          />
          in {{ selectedProduct.rating?.count }} ratings
        </div>

        <div class="w-[100%] text-center bg-[#efefef]">
          category: {{ selectedProduct.category }}
        </div>

        <div class="w-[100%] text-center bg-[#efefef]">
          {{ selectedProduct.description }}
        </div>
        <div class="w-[100%] text-center bg-[#efefef] font-medium">
          price: {{ selectedProduct.price }}$
        </div>
        <div>
          <form
            action="#"
            class="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-1 xl:grid-cols-2"
          >
            <div class="rounded border bg-gray-200">
              <div class="flex items-center pl-4">
                <label class="mr-4 cursor-pointer" for="quantity"
                  >Quantity</label
                ><input
                  type="number"
                  name="quantity"
                  class="w-full border-l py-3 pl-4 shadow-inner"
                  id="quantity"
                  min="1"
                  max="4681"
                  required=""
                  v-model="productQuantity"
                />
              </div>
              <div class="border-t p-1 text-right text-sm">4,681 in stock</div>
            </div>
            <button
              @click="addToCart"
              aria-busy="false"
              type="button"
              class="flex cursor-pointer items-center justify-center gap-1 rounded-lg px-6 py-[0.625rem] font-medium hover:shadow focus:outline focus:outline-2 focus:outline-offset-1 focus:outline-info-400 active:shadow-[inset_0_4px_4px_rgba(0,0,0,0.25)] active:outline active:outline-1 active:outline-offset-1 disabled:pointer-events-none disabled:text-black-300 border border-purple-600 bg-purple-600 text-white hover:border-purple-400 hover:bg-purple-400 focus:border-purple-400 focus:bg-purple-400 active:border-purple-700 active:bg-purple-700 disabled:border-black-200 disabled:bg-black-200 text-lg"
            >
              <i class="pi pi-shopping-cart">
                <path
                  d="M11 9h2V6h3V4h-3V1h-2v3H8v2h3v3zm-4 9c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zm-9.83-3.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.86-7.01L19.42 4h-.01l-1.1 2-2.76 5H8.53l-.13-.27L6.16 6l-.95-2-.94-2H1v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.13 0-.25-.11-.25-.25z"
                ></path></i
              >Add to cart
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import "primeicons/primeicons.css";
import { useRoute } from "vue-router";
import axios from "axios";
import Rating from "primevue/rating";
import { useStore } from "vuex";

const store = useStore();

const productQuantity = ref(1);

// import { useStore } from "vuex";

const selectedProduct = ref({});
const route = useRoute();

onMounted(async () => {
  const api = await axios.get(
    `https://fakestoreapi.com/products/${route.params.id}`
  );
  selectedProduct.value = api.data;
});

const addToCart = () => {
  store.commit("setCartItems", {
    product: selectedProduct.value,
    quantity: productQuantity.value,
  });
};

// selectedProduct.value = store.getters["getState"];
// console.log(route.params.id);
// defineProps({
//   productName: {
//     type: String,
//   },

//   imageUrl: {
//     type: String,
//   },

//   rating: {
//     type: String,
//   },

//   ratingUsers: {
//     type: String,
//   },

//   price: {
//     type: String,
//   },

//   category: {
//     type: String,
//   },

//   description: {
//     type: String,
//   },
// });
</script>
