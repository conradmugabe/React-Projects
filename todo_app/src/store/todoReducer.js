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
      const { id } = action.payload;
      state.forEach((todo, index) => {
        if (todo.id === id) {
          state.splice(index, 1);
        }
      });
    },
    todoCompleted: (state, action) => {
      const { id, completed } = action.payload;
      state.map((todo) =>
        todo.id !== id ? todo : (todo.completed = completed)
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
    data: { id },
    onSuccess: todoRemoved.type,
  });

export const editTodo = (id) =>
  apiCallBegan({
    url: "/todos",
    method: "patch",
    data: { id },
    onSuccess: todoCompleted.type,
  });

export default slice.reducer;
