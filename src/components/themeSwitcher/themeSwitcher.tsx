import React from "react";
import * as S from "./themeSwitcher.style";
import { useTheme } from "../context/useData";

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <S.ThemeToggleWrapper>
      <S.ToggleButton
        onClick={toggleTheme}
        theme={theme}
      >
        {theme === "light" ? "Темная тема" : "Светлая тема"}
      </S.ToggleButton>
    </S.ThemeToggleWrapper>
  );
};

export default ThemeToggle;
