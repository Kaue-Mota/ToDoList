import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { themeConfig } from "../../contexts/theme";

const TodoForm = () => {
    const { theme } = useContext(ThemeContext);
  return (
    <form className="relative mb-10 ">
      <span className={`absolute w-6 h-6 border ${themeConfig[theme].todo.borderColor} top-1/2 transform -translate-y-1/2 rounded-full left-6`}></span>

      <input
        className={`w-full ${themeConfig[theme].todo.textColor} rounded-md py-6 pl-16 outline-none text-lg ${themeConfig[theme].todo.backgroundColor}`}
        type="text"
        placeholder="Create a new todo..."
        name="todo"
      />
    </form>
  );
};

export default TodoForm;
