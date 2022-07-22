<template>
  <Dialog
    header="Product Details "
    v-model:visible="visibleDialog"
    :breakpoints="{ '960px': '75vw', '640px': '90vw' }"
    :style="{ width: '450px' }"
    modal
  >
    <div class="flex justify-center">
      <img
        v-if="selectedProduct.image"
        class="w-[225px] h-[225px]"
        :src="selectedProduct.image"
        alt=""
      />
    </div>
    <div>
      <div class="flex justify-center"><h5 class="font-semibold">Name</h5></div>
      <div class="flex justify-center">
        <InputText class="w-full" type="text" v-model="selectedProduct.title" />
      </div>
    </div>

    <div class="flex flex-col my-3 justify-center">
      <div class="flex justify-center">
        <label class="font-semibold" for="description">Description</label>
      </div>
      <div class="flex justify-center">
        <Textarea
          class="w-full"
          id="description"
          v-model="selectedProduct.description"
          rows="3"
          cols="20"
        />
      </div>
    </div>
    <div class="flex flex-row justify-between">
      <div>
        <h5 class="text-center font-semibold">categories</h5>
        <Dropdown
          class="w-[182px]"
          v-model="selectedProduct.category"
          :options="categories"
          placeholder="Select a Category"
        />
      </div>

      <div>
        <div class="text-center"><h5 class="font-semibold">price</h5></div>
        <div>
          <InputText
            class="w-[182px]"
            type="number"
            v-model="selectedProduct.price"
          />
        </div>
      </div>
    </div>

    <div class="flex justify-end pb-0 p-4">
      <Button
        class="bg-[#dfffff] font-bold border-[#dfffff] text-[#4f7fcf]"
        label="save"
        @click="create(selectedProduct)"
      />
    </div>
  </Dialog>
</template>

<script setup>
import { defineProps, computed, defineEmits } from "vue";
import Dialog from "primevue/dialog";
import InputText from "primevue/inputtext";
import Textarea from "primevue/textarea";
import Dropdown from "primevue/dropdown";
import { useStore } from "vuex";
import Button from "primevue/button";

const store = useStore();

const props = defineProps({
  displayBasic: {
    type: Boolean,
  },

  categories: {
    type: Array,
  },

  selectedProductForEdit: {
    type: Object,
  },
});

const create = (item) => {
  store.dispatch("createProduct", item);
};

// const selectedCategory = ref();
const categories = computed(() => {
  return store.getters["getProductCategories"];
});

const emit = defineEmits(["hide", "update:modelValue"]);

const selectedProduct = computed({
  get: () => props.selectedProductForEdit,
  set: () => {},
});

const visibleDialog = computed({
  get: () => props.displayBasic,
  set: () => {
    emit("update:modelValue", false);
    emit("hide");
  },
});
</script>
<style></style>
