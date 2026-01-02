import ToDoHeader from "./components/TodoHeader";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { themeConfig } from "./contexts/theme";
import { ThemeContext } from "./contexts/ThemeContext";
import { useContext } from "react";



function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <main className={`h-screen ${themeConfig[theme].layout.backgroundColor}`}>
        <div className={`${themeConfig[theme].layout.heroClass} h-95 bg-cover bg-no-repeat`}>
          <div className="max-w-175 m-auto p-8">
            <ToDoHeader />

            <TodoForm />
            
            <TodoList />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
