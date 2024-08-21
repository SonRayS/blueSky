import { Link } from "react-router-dom";
import * as S from "./header.style";
import { AppRoutes } from "../appRoutes/appRoutes";
import React, { useState } from "react";
import getForecast from "../api/getForecast/getForecast";
import { useDataContext } from "../context/useData";

export default function Header() {
  const dataContext = useDataContext();
  const [inputValue, setInputValue] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [hasInputError, setHasInputError] = useState<boolean>(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const filteredValue = value.replace(/[^a-zA-Zа-яА-Я]/g, "");

    if (filteredValue !== value) {
      setHasInputError(true); // Устанавливаем ошибку, если есть недопустимые символы
    } else {
      setHasInputError(false); // Сбрасываем ошибку, если введено корректное значение
    }

    setInputValue(filteredValue);
  };

  const handleImgClick = async () => {
    if (inputValue.trim() !== "") {
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
    <S.Headers>
      <Link to={AppRoutes.HomePage}>
        <S.HeadersLogo
          src="/public/Logo.jpg"
          alt="Logo"
        />
      </Link>
      <S.HeadersSearch hasInputError={hasInputError}>
        <S.HeadersSearchInput
          type="text"
          onChange={handleInputChange}
          value={inputValue}
          placeholder="Введите город"
          name="search"
        />
        <S.HeadersSearchImg
          src="/public/search.png"
          onClick={handleImgClick}
          alt="Получить прогноз"
        />
      </S.HeadersSearch>
    </S.Headers>
  );
}
