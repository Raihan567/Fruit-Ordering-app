import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartVisible: false,
};

const CartUiSlice = createSlice({
  name: "cartUi",
  initialState,
  reducers: {
    toggle(state) {
      state.cartVisible = !state.cartVisible;
    },
  },
});

export const CartUiAction = CartUiSlice.actions;

export default CartUiSlice.reducer;
