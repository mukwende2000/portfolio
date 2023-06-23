import { ReactNode, createContext, useState } from "react";

type ThemeState = {
  theme: string;
  textColor: string;
  backgroundColor: string;
  textHover: string;
  bgHover: string;
  setTheme?: React.Dispatch<React.SetStateAction<string>>;
};

const initialState: ThemeState = {
  theme: "blue",
  textColor: "text-theme2",
  backgroundColor: "bg-theme2",
  bgHover: "hover:bg-theme2 ",
  textHover: "hover:text-theme2 ",
};
const ThemeContext = createContext(initialState);

export function ThemeContextProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<string>("blue");
  const textColor =
    theme === "green"
      ? "text-theme1"
      : theme === "blue"
      ? "text-theme2"
      : "text-theme3";
  const backgroundColor =
    theme === "green"
      ? "bg-theme1"
      : theme === "blue"
      ? "bg-theme2"
      : "bg-theme3";
  const bgHover =
    theme === "green"
      ? "hover:bg-theme1"
      : theme === "blue"
      ? "hover:bg-theme2"
      : "hover:bg-theme3";
  const textHover =
    theme === "green"
      ? "hover:text-theme1"
      : theme === "blue"
      ? "hover:text-theme2"
      : "hover:text-theme3";
  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
        textColor,
        backgroundColor,
        textHover,
        bgHover,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeContext;
