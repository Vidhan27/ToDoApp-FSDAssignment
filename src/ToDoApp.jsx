import { useState } from "react";
import TodoList from "./ToDoList";

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  // Add a new task
  const addTodo = () => {
    if (input.trim() === "") return;
    setTodos([...todos, { id: Date.now(), text: input, completed: false }]);
    setInput("");
  };

  // Delete a task
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // Toggle complete status
  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div className="todo-app">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a new task..."
      />
      <button onClick={addTodo}>Add</button>
      <TodoList todos={todos} deleteTodo={deleteTodo} toggleComplete={toggleComplete} />
    </div>
  );
}

export default TodoApp;
