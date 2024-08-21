import { useContext } from "react";
import { DataContext } from "./dataContext";
import { ThemeContext } from "./themeContext";

export function useDataContext() {
  return useContext(DataContext);
}

export function useTheme() {
  const themeValue = useContext(ThemeContext);

  if (themeValue === undefined) {
    throw new Error("useTheme must be used within a ThemeContextProvider");
  }

  return themeValue;
}
