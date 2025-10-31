import { createSlice } from "@reduxjs/toolkit";

const storedCart = typeof window !== "undefined"
  ? JSON.parse(localStorage.getItem("cart")) || []
  : [];

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: storedCart,
  },
  reducers: {
    addToCart: (state, action) => {
      console.log('init add to cart')
      const item = action.payload;
      const existingItem = state.cartItems.find((i) => i.id === item.id);
      console.log('existingItem',existingItem)
      if (existingItem) {
        console.log('inside existingItem')
        existingItem.quantity += item.quantity;
      } else {
        console.log('cart item',{ ...item })
        state.cartItems.push({ ...item });
      }

      // ✅ Save updated cart to localStorage
      if (typeof window !== "undefined") {
        localStorage.setItem("cart", JSON.stringify(state.cartItems));
      }
    },




    removeItem: (state, action) => {
      state.cartItems = state.cartItems.filter((x) => x.id !== action.payload);

      if (typeof window !== "undefined") {
        localStorage.setItem("cart", JSON.stringify(state.cartItems));
      }
    },

    loadCart: (state, action) => {
      state.cartItems = action.payload;
    },
  },

});

export const { addToCart, removeItem, loadCart } = cartSlice.actions;
export default cartSlice.reducer;
