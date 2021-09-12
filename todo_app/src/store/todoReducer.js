import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "./api";

const slice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    todoAdded: (state, action) => {
      const { description, id, completed } = action.payload;
      const todo = { id, description, completed };
      state.push(todo);
    },
    todosAdded: (state, action) => {
      state.concat(action.payload);
    },
    todoRemoved: (state, action) => {
      state = state.filter((todo) => todo.id === action.payload.id);
    },
    todoCompleted: (state, action) => {
      const { id, description, completed } = action.payload;
      state.map((todo) =>
        todo.id !== id ? todo : { id, description, completed }
      );
    },
  },
});

const { todoAdded, todosAdded, todoRemoved, todoCompleted } = slice.actions;

export const loadTodos = () =>
  apiCallBegan({
    url: "/todos",
    method: "get",
    onSuccess: todosAdded.type,
  });

export const addTodo = (todo) =>
  apiCallBegan({
    url: "/todos",
    method: "post",
    data: { description: todo },
    onSuccess: todoAdded.type,
  });

export const removeTodo = (id) =>
  apiCallBegan({
    url: "/todos",
    method: "delete",
    onSuccess: todoRemoved.type,
  });

export const editTodo = (todo) =>
  apiCallBegan({
    url: "/todos",
    method: "patch",
    onSuccess: todoCompleted.type,
  });

export default slice.reducer;
