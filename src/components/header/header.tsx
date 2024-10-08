import { Link } from "react-router-dom";
import * as S from "./header.style";
import { AppRoutes } from "../appRoutes/appRoutes";
import React, { useState } from "react";
import getForecast from "../api/getForecast/getForecast";
import { useDataContext, useTheme } from "../context/useData";
import { useTranslation } from "react-i18next";
import { getLocalData, localStorageData } from "../localStorage/localeDate";

export default function Header() {
  const { t } = useTranslation();
  const dataContext = useDataContext();
  const [inputValue, setInputValue] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [hasInputError, setHasInputError] = useState<boolean>(false);
  const { theme } = useTheme();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const filteredValue = value.replace(/[^a-zA-Zа-яА-Я]/g, "");

    if (filteredValue !== value) {
      setHasInputError(true);
    } else {
      setHasInputError(false);
    }

    setInputValue(filteredValue);
  };

  const handleImgClick = async () => {
    /* Сохранение параметра запроса для повторного переискользование */
    if (inputValue.trim() !== "" || getLocalData() !== "") {
      localStorageData({ region: inputValue });
      try {
        const data = await getForecast(inputValue);
        if (dataContext?.saveData) {
          dataContext.saveData(data);
        }
        setError(null);
        setHasInputError(false);
      } catch (err) {
        setError(
          err instanceof Error
            ? `Ошибка при загрузке данных: ${err.message}`
            : `Неизвестная ошибка при загрузке данных, ${error}`
        );
        setHasInputError(true);
      }
    } else {
      alert("Пожалуйста, введите данные");
      setHasInputError(true);
    }
  };

  return (
    <S.Headers theme={theme}>
      <Link to={AppRoutes.HomePage}>
        <S.HeadersLogo
          src="/Logo.png"
          alt="Logo"
        />
      </Link>
      <S.HeadersSearch hasInputError={hasInputError}>
        <S.HeadersSearchInput
          theme={theme}
          type="text"
          onChange={handleInputChange}
          value={inputValue}
          placeholder={t("Введите город")}
          name="search"
        />
        <S.HeadersSearchImg
          src="/search.png"
          onClick={handleImgClick}
          alt="Получить прогноз"
        />
      </S.HeadersSearch>
    </S.Headers>
  );
}
