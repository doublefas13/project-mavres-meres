<template>
  <div class="container m-auto my-3 border-2">
    <div class="p-3">
      <Button
        label="New"
        icon="pi pi-plus"
        class="p-button-success mr-2"
        @click="openBasic"
      />
      <dialogCOmponent
        :selectedProductForEdit="selectedProductForEdit"
        :displayBasic="displayBasic"
        @hide="displayBasic = false"
      ></dialogCOmponent>

      <Button label="Delete" icon="pi pi-trash" class="p-button-danger" />
    </div>
    <DataTable :value="products" responsiveLayout="scroll">
      <Column field="id" header="id"></Column>
      <Column header="image">
        <template #body="{ data: { image } }">
          <img :src="image" alt="" class="w-[100px] h-[100px]" />
        </template>
      </Column>
      <Column field="title" header="Name"></Column>
      <Column field="category" class="text-start" header="Category"></Column>
      <column class="w-[12rem]" header="rating">
        <template #body="slotProps">
          <Rating
            :modelValue="slotProps.data.rating.rate"
            :readonly="true"
            :cancel="false"
            :stars="5"
          />
        </template>
      </column>
      <column header="actions">
        <template #body="petro">
          <div class="flex gap-2">
            <Button
              @click="openBasic(petro.data)"
              icon="pi pi-pencil"
              class="p-button-rounded bg-green-400"
            />

            <Button icon="pi pi-trash" class="p-button-rounded bg-red-500" />
          </div>
        </template>
      </column>
    </DataTable>
  </div>
</template>

<script setup>
import { useStore } from "vuex";
import { computed, ref } from "vue";
import DataTable from "primevue/datatable";
import Button from "primevue/button";
import Rating from "primevue/rating";

import dialogCOmponent from "../components/dialogCOmponent.vue";

import Column from "primevue/column";

const selectedProductForEdit = ref();

const displayBasic = ref(false);
const openBasic = (product) => {
  displayBasic.value = true;
  selectedProductForEdit.value = { ...product };
};

const store = useStore();

const products = computed(() => {
  return store.getters["getFilterItems"];
});
console.log(products.value);
</script>
<style></style>
