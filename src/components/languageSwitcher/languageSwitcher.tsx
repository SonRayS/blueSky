import React from "react";
import { useTranslation } from "react-i18next";
import { useTheme } from "../context/useData";
import { LanguageBlock, LanguageSelect, LanguageOption } from "./languageSwitcher.style";

const LanguageSwitcher: React.FC = () => {
  const { theme } = useTheme();
  const { i18n } = useTranslation();
  const { t } = useTranslation();

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLanguage = event.target.value;
    i18n.changeLanguage(selectedLanguage);
  };

  return (
    <LanguageBlock theme={theme}>
      <label htmlFor="language-switcher">{t("Язык")} : </label>
      <LanguageSelect
        theme={theme}
        id="language-switcher"
        onChange={handleChange}
        value={i18n.language}
      >
        <LanguageOption
          theme={theme}
          value="en"
        >
          Eng
        </LanguageOption>
        <LanguageOption
          theme={theme}
          value="ru"
        >
          Ru
        </LanguageOption>
      </LanguageSelect>
    </LanguageBlock>
  );
};

export default LanguageSwitcher;
