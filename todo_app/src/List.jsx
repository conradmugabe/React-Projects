import "./List.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editTodo, loadTodos, removeTodo } from "./store/todoReducer";

function List() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo);
  useEffect(() => {
    dispatch(loadTodos());
  });

  return (
    <ul className="List">
      {todos &&
        todos.map((todo) => (
          <li key={todo.id}>
            <span>{todo.description}</span>
            <button
              disabled={todo.completed}
              onClick={() => dispatch(editTodo(todo.id))}
            >
              {todo.completed ? "Completed" : "Complete"}
            </button>
            <button className="delete-btn" onClick={() => dispatch(removeTodo(todo.id))}>Delete</button>
          </li>
        ))}
    </ul>
  );
}

export default List;
