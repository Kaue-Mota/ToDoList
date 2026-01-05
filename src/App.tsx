import ToDoHeader from "./components/TodoHeader";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { TodoContainer } from "./components/TodoContainer";
import { useTodo } from "./Hooks/useTodo";


function App() {

  const {addTodo, toggleTodoCompleted, filteredTodos, clearCompleted, filter, setFilter } = useTodo();

  
  return (
    <>
      <TodoContainer>
        <ToDoHeader />

        <TodoForm addTodo={addTodo} />

        <TodoList
          todoList={filteredTodos}
          toggleTodoCompleted={toggleTodoCompleted}
          setFilter={setFilter}
          filter={filter}
          clearCompleted={clearCompleted}
        />
      </TodoContainer>
    </>
  );
}

export default App;
