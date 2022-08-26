import { useTodos } from "./hooks/useTodos";
import { TodoAdd } from "./TodoAdd";
import { TodoList } from "./TodoList";

export const TodoApp = () => {
  const {
    todos,
    handleNewTodo,
    handleDeleteTodo,
    handleToggleTodo,
    todosCount,
    todosPendingCount,
  } = useTodos();
  return (
    <>
      <h1>
        Todo App {todosCount()},<small>pendientes: {todosPendingCount()}</small>
      </h1>
      <hr />
      <div className="row">
        <div className="col-7">
          <TodoList
            todos={todos}
            handleDeleteTodo={handleDeleteTodo}
            onToggleTodo={handleToggleTodo}
          />
        </div>
        <div className="col-5">
          <h4>Agregar todo</h4>
          <hr />
          <TodoAdd handleNewTodo={handleNewTodo} />
        </div>
      </div>
    </>
  );
};
