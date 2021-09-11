import { useState } from "react";
import List from "./List";
import "./App.css";
import axios from "axios";
import Form from "./Form";

const baseUrl = "https://jsonplaceholder.typicode.com";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (title) => {
    const payload = { title, completed: false };

    axios.post(`${baseUrl}/todos`, payload).then((response) => {
      const { data } = response;
      setTodos((prevTodos) => [...prevTodos, data]);
    });
  };

  const completeTask= () => {
    
  }

  return (
    <div className="App">
      <header className="App-header">
        <Form addTodo={addTodo} />
        <List items={todos} />
      </header>
    </div>
  );
}

export default App;
