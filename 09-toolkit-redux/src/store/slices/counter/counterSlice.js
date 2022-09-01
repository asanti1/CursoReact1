import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    counter: 10,
    adder: 2,
  },
  reducers: {
    increment: (state) => {
      state.counter += 1;
    },
    decrement: (state) => {
      state.counter -= 1;
    },
    incrementBy: (state, adder) => {
      state.counter += adder.payload;
    },
  },
});

export const { increment, decrement, incrementBy } = counterSlice.actions;
