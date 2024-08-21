import { createContext, useState, useEffect, ReactNode } from "react";

type ThemeContextType = {
  theme: string;
  toggleTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const isDarkTheme = window?.matchMedia("(prefers-color-scheme: dark)").matches;
const defaultTheme = isDarkTheme ? "dark" : "light";

const setThemeAttribute = (theme: string) => {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("app-theme", theme);
};

type ThemeContextProviderProps = {
  children: ReactNode;
};

export const ThemeContextProvider = ({ children }: ThemeContextProviderProps) => {
  const [theme, setTheme] = useState<string>(localStorage.getItem("app-theme") || defaultTheme);

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    setThemeAttribute(nextTheme);
    setTheme(nextTheme);
  };

  useEffect(() => {
    setThemeAttribute(localStorage.getItem("app-theme") || defaultTheme);
  }, []);

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
};
