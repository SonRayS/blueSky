import React from "react";
import * as S from "./themeSwitcher.style";
import { useTheme } from "../context/useData";
import { useTranslation } from "react-i18next";

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const { t } = useTranslation();
  return (
    <S.ThemeToggleWrapper>
      <S.ToggleButton
        onClick={toggleTheme}
        theme={theme}
      >
        {theme === "light" ? `${t("Темная тема")}` : `${t("Светлая тема")}`}
      </S.ToggleButton>
    </S.ThemeToggleWrapper>
  );
};

export default ThemeToggle;
