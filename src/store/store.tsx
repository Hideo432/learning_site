import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../types";
interface cartItem extends Product {
  quantity: number;
}
interface CartState {
  items: cartItem[];
}
const initialState: CartState = {
  items: [],
};
const courses = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<Product>) => {
      const item = action.payload;
      const existingItem = state.items.find((i) => i.id === item.id);
      if (existingItem) {
        existingItem.quantity += item.quantity || 1;
      } else {
        state.items.push({ ...item, quantity: item.quantity || 1 });
      }
    },
  },
});

export const coursesReducer = courses.reducer;

export const store = configureStore({
  reducer: {
    courses: coursesReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
