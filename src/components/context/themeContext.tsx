import { createContext, useState, useEffect, ReactNode } from "react";
import { ThemeProvider } from "styled-components";

type ThemeName = "dark" | "light";

const themeConfig: Record<ThemeName, { color: string; background: string }> = {
  dark: {
    color: "#ffffff",
    background: "linear-gradient(to bottom, #333, #666)",
  },
  light: {
    color: "#000000",
    background: "linear-gradient(to bottom, #181726, #3A5199, #4D858D)",
  },
};

const isDarkTheme = window?.matchMedia("(prefers-color-scheme: dark)").matches;
const defaultTheme: ThemeName = isDarkTheme ? "dark" : "light";

const setThemeAttribute = (theme: ThemeName) => {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("app-theme", theme);
};

type ThemeContextType = {
  theme: ThemeName;
  toggleTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

type ThemeContextProviderProps = {
  children: ReactNode;
};

export const ThemeContextProvider = ({ children }: ThemeContextProviderProps) => {
  const [theme, setTheme] = useState<ThemeName>((localStorage.getItem("app-theme") as ThemeName) || defaultTheme);

  const toggleTheme = () => {
    const nextTheme: ThemeName = theme === "light" ? "dark" : "light";
    setThemeAttribute(nextTheme);
    setTheme(nextTheme);
  };

  useEffect(() => {
    setThemeAttribute((localStorage.getItem("app-theme") as ThemeName) || defaultTheme);
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProvider theme={themeConfig[theme]}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};
