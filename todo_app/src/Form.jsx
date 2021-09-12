import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./store/todoReducer";

function Form() {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.length > 0) {
      dispatch(addTodo(value));
      setValue("");
    }
  };

  return (
    <form className="Form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="Form-list"
        placeholder="Task..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <div className="Form-button-container">
        <button className="Form-button">Add task</button>
      </div>
    </form>
  );
}

export default Form;
