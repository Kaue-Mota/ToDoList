import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { themeConfig } from "../../contexts/theme";

const todos = [
  {
    id: 1,
    title: "Complete online JavaScript course",
    completed: true,
  },

  {
    id: 2,
    title: "Jog around the park 3x",
    completed: false,
  },

  {
    id: 3,
    title: "10 minutes meditation",
    completed: false,
  },
];

const TodoList = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <div className={`${themeConfig[theme].todo.backgroundColor} rounded-md`}>
        <ul>
          {todos.map((todo) => (
            <li
              className={`p-6 border-b ${themeConfig[theme].todo.borderColor} flex justify-between items-center`}
              key={todo.id}
            >
              <div className="flex items-center gap-4">
                <span className="inline-block w-6 h-6 rounded-full hover:bg-[linear-gradient(to_right,hsl(192,100%,67%),hsl(280,87%,65%))] hover:p-[1px] cursor-pointer">
                  <button
                    className={`w-full h-full border ${themeConfig[theme].todo.borderColor} 
                  ${themeConfig[theme].todo.backgroundColor} rounded-full cursor-pointer`}
                  ></button>
                </span>

                <p className={`${themeConfig[theme].todo.textColor}`}>
                  {todo.title}
                </p>
              </div>
            </li>
          ))}
        </ul>

        <div
          className={`flex justify-between p-4 ${themeConfig[theme].layout.textColor} text-sm`}
        >
          <p>{todos.length} items total</p>
          <div className="hidden sm:flex gap-4">
            <button className="text-bright-blue cursor-pointer">All</button>
            <button
              className={`cursor-pointer ${
                theme === "dark"
                  ? "hover:text-neutral-light-grayish-blue"
                  : "hover:text-neutral-very-dark-blue"
              }`}
            >
              Active
            </button>
            <button
              className={`cursor-pointer ${
                theme === "dark"
                  ? "hover:text-neutral-light-grayish-blue"
                  : "hover:text-neutral-very-dark-blue"
              }`}
            >
              Completed
            </button>
          </div>
          <button
            className={`cursor-pointer ${
              theme === "dark"
                ? "hover:text-neutral-light-grayish-blue"
                : "hover:text-neutral-very-dark-blue"
            }`}
          >
            Clear Completed
          </button>
        </div>
      </div>

      <div
        className={`${themeConfig[theme].todo.backgroundColor} ${themeConfig[theme].layout.textColor} mt-4 flex justify-center gap-5 py-4 rounded-md sm:hidden`}
      >
        <button className="text-bright-blue cursor-pointer">All</button>
        <button
          className={`cursor-pointer ${
            theme === "dark"
              ? "hover:text-neutral-light-grayish-blue"
              : "hover:text-neutral-very-dark-blue"
          }`}
        >
          Active
        </button>
        <button
          className={`cursor-pointer ${
            theme === "dark"
              ? "hover:text-neutral-light-grayish-blue"
              : "hover:text-neutral-very-dark-blue"
          }`}
        >
          Completed
        </button>
      </div>
    </>
  );
};

export default TodoList;
