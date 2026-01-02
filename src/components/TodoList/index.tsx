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
              <button
                className={`w-6 h-6 border ${themeConfig[theme].todo.borderColor} rounded-full cursor-pointer`}
              ></button>
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
          <button className="text-bright-blue">All</button>
          <button>Active</button>
          <button>Completed</button>
        </div>
        <button>Clear Completed</button>
      </div>
     
    </div>

     <div className={`${themeConfig[theme].todo.backgroundColor} ${themeConfig[theme].layout.textColor} mt-4 flex justify-center gap-5 py-4 rounded-md sm:hidden`}>
        <button className="text-bright-blue">All</button>
          <button>Active</button>
          <button>Completed</button>
      </div>
</>
    
  );
};

export default TodoList;
