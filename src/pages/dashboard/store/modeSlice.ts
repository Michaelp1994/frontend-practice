import { createSlice } from "@reduxjs/toolkit";

// export type State = {
//   mode: string;
// };
export const modeSlice = createSlice({
  name: "mode",
  initialState: {
    mode: "light",
  },
  reducers: {
    toggle: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggle } = modeSlice.actions;

export default modeSlice.reducer;
