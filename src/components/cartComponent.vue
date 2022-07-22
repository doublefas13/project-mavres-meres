<template>
  <div
    v-if="cartCount != 0"
    class="flex flex-row gap-3 container m-auto justify-between my-2"
  >
    <div class="border-1 shadow-md rounded-md flex-1 p-2">
      <div class="border-b-2">
        <strong class="text-xl">Cart</strong> {{ cartCount }} lines
        <span class="text-[#848484]">({{ totalItems }} items)</span>
      </div>
      <div
        class="flex flex-row p-2 m-0 flex-wrap gap-2 justify-between w-full"
        :class="{ 'border-b-2': index + 1 < cartProducts.length }"
        v-for="(item, index) in cartProducts"
        :key="item"
      >
        <div class="flex flex-row justify-between w-full">
          <div
            class="bg-contain bg-center bg-no-repeat"
            :style="{
              'background-image': `url(${item.product.image})`,
              width: '64px',
              height: '64px',
            }"
          ></div>

          <div class="flex flex-row justify-between w-[100%] flex-1">
            <div>
              <div class="flex pr-8">{{ item.product.title }}</div>
              <div>Usually processed within 3 days.</div>
              <div class="flex items-center gap-2 px-2">
                <label class="cursor-pointer" for="lines-0-quantity"
                  >Quantity</label
                ><input
                  name="lines[0].quantity"
                  type="number"
                  id="lines-0-quantity"
                  class="block rounded border bg-gray-300 p-1 font-mono shadow-inner hover:bg-white focus:bg-white"
                  max="4615"
                  min="1"
                  v-model="item.quantity"
                  @change="updateCart(item)"
                />
                <Button
                  @click="removeItem(item)"
                  class="text-white font-bold py-0 px-1 rounded-full bg-red-600 border-red-600 hover:bg-blue-500 hover:shadow-lg"
                  label="remove"
                />
              </div>
            </div>
          </div>

          <div>{{ item.product.price }}$</div>
        </div>
      </div>
    </div>

    <div class="flex flex-col border-1 h-fit shadow-md rounded-md gap-2 p-2">
      <strong class="flex justify-center border-b-2">Cart summary</strong>
      <div class="border-b-2 flex flex-row justify-between">
        <div>estimated total</div>
        <div>{{ sum.toFixed(2) }}$</div>
      </div>
      <div class="flex justify-center">
        <Button
          class="text-white font-bold w-[270px] rounded-full bg-[#6f00ff]"
          label="CHECKOUT"
        />
      </div>
    </div>
  </div>
  <div v-else>
    <strong class="flex justify-center m-3 flex-1"> NO ITEMS IN CART </strong>
  </div>
</template>

<script setup>
import { useStore } from "vuex";
import { computed } from "vue";
import Button from "primevue/button";

const store = useStore();

const cartCount = computed(() => {
  return store.getters["getCartItemsLength"];
});

const cartProducts = computed(() => {
  return store.getters["getCartItems"];
});

const sum = computed(() => {
  return store.getters["getCartSummary"];
});

const totalItems = computed(() => {
  return store.getters["getTotalItems"];
});

const updateCart = (item) => {
  store.commit("setNewQuantity", item);
};

const removeItem = (item) => {
  store.commit("setRemoveItem", item);
};

console.log(totalItems.value);
// cartProducts.value.reduce(
//   (acc, currentValue) =>
//     acc + currentValue.product.price * currentValue.quantity,
//   0
// );
// console.log(sum);
</script>
