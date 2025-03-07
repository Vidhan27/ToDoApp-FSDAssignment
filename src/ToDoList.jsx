import TodoItem from "./ToDoItem";

function TodoList({ todos, deleteTodo, toggleComplete }) {
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo} toggleComplete={toggleComplete} />
      ))}
    </ul>
  );
}

export default TodoList;
