import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItem: [],
  totalQuantity: 0,
  totalAmount: 0,
};

const CartSlice = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    // Add to Cart
    addItem(state, action) {
      const newItem = action.payload;
      const existingItem = state.cartItem.find(
        (item) => item.id === newItem.id
      );
      state.totalQuantity++;

      if (!existingItem) {
        state.cartItem.push({
          id: newItem.id,
          title: newItem.title,
          image01: newItem.image01,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice =
          Number(existingItem.totalPrice) + Number(newItem.price);
      }

      state.totalAmount = state.cartItem.reduce(
        (total, item) => total + Number(item.price) * Number(item.quantity)
      );
    },
    // Delete Item
  },
});

export const cartActions = CartSlice.actions;

export default CartSlice.reducer;
