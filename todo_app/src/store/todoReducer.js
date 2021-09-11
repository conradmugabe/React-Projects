import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    todoAdded: (state, action) => {
      const { description, id, completed } = action.payload;
      const todo = { id, description, completed };
      state.push(todo);
    },
  },
});

export default slice.reducer;
