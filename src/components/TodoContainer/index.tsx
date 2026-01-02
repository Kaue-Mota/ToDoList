import { themeConfig } from "../../contexts/theme";
import { ThemeContext } from "../../contexts/ThemeContext";
import { useContext } from "react";

interface TodoContainerProps {
    children: React.ReactNode;
}

export const TodoContainer = ({ children }: TodoContainerProps) => {

    const { theme } = useContext(ThemeContext);

  return (
    <main className={`h-screen ${themeConfig[theme].layout.backgroundColor}`}>
        <div 
        className={`${themeConfig[theme].layout.heroClass} h-95 bg-cover bg-no-repeat`}>
          <div 
          className="max-w-175 m-auto p-8">
            {children}
          </div>
        </div>
      </main>
  )
};