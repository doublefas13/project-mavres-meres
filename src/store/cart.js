export default {
  state: {
    cartItems: [],
  },

  getters: {
    getCartItems(state) {
      return state.cartItems;
    },
    getCartItemsLength(state) {
      return state.cartItems.length;
    },

    getCartSummary(state) {
      return state.cartItems.reduce(
        (acc, currentValue) =>
          acc + currentValue.product.price * currentValue.quantity,
        0
      );
    },

    getTotalItems(state) {
      return state.cartItems.reduce(
        (acc, currentValue) => acc + currentValue.quantity,
        0
      );
    },
  },

  actions: {},

  mutations: {
    setCartItems(state, cartItem) {
      const filterResult = state.cartItems.findIndex(
        ({ product }) => product.id == cartItem.product.id
      );

      if (filterResult == -1) {
        state.cartItems.push(cartItem);
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        return;
      }

      state.cartItems[filterResult].quantity =
        state.cartItems[filterResult].quantity + cartItem.quantity;

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },

    setAllCartItems(state, items) {
      state.cartItems = items;
    },

    setNewQuantity(state, item) {
      const index = state.cartItems.findIndex(
        (i) => item.product.id == i.product.id
      );
      state.cartItems[index].quantity = item.quantity;
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },

    setRemoveItem(state, item) {
      const removeId = state.cartItems.findIndex(
        (i) => item.product.id == i.product.id
      );

      state.cartItems.splice(removeId, 1);
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
  },
};
