import { createStore } from "vuex";
import axios from "axios";

import cart from "./cart";
export default createStore({
  namespaced: true,
  state: {
    resultsApi: [],
    selectedItem: {},
    queryText: "",
    activeCategory: "",
    productCategories: [],
  },

  getters: {
    getState(state) {
      return state.selectedItem;
    },
    getProducts(state) {
      return state.resultsApi;
    },

    getFilterItems(state) {
      if (state.queryText) {
        return state.resultsApi.filter(
          (item) =>
            ~item.title.toLowerCase().indexOf(state.queryText.toLowerCase())
        );
      }
      return state.resultsApi;
    },

    getActiveCategory(state) {
      return state.activeCategory;
    },

    getProductCategories(state) {
      return state.productCategories;
    },
  },

  actions: {
    setResultsApi({ commit }, resultsApi) {
      return commit("setStoreApi", resultsApi);
    },

    setSelectedItem({ commit }, selectedItem) {
      return commit("setStoreItem", selectedItem);
    },

    async fetchProducts({ commit }, sorting) {
      const { data } = await axios.get(
        `https://fakestoreapi.com/products?sort=${sorting}`
      );

      commit("setStoreApi", data);
      commit("setSelectedCategory");
      commit("setProductCategories");
    },

    async createProduct(store, item) {
      const { data } = await axios.post(`https://fakestoreapi.com/products`, {
        id: item.id,
        title: item.title,
        price: item.price,
        category: item.category,
      });

      console.log(data);
      console.log(item);
    },

    async fetchProductsByCategory({ commit }, item) {
      const { data } = await axios.get(
        `https://fakestoreapi.com/products/category/${item}`
      );

      commit("setStoreApi", data);
      commit("setSelectedCategory", item);
    },
  },

  mutations: {
    setStoreApi(state, resultsApi) {
      return (state.resultsApi = resultsApi);
    },

    setStoreItem(state, selectedItem) {
      return (state.selectedItem = selectedItem);
    },

    setSearchText(state, text) {
      state.queryText = text;
    },

    setSelectedCategory(state, category) {
      return (state.activeCategory = category);
    },

    setProductCategories(state) {
      state.resultsApi.map((item) => {
        if (!~state.productCategories.indexOf(item.category)) {
          state.productCategories.push(item.category);
        }
        console.log(state.productCategories);
      });
    },
  },

  modules: {
    cart,
  },
});
