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

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    if (typeof value === "string") {
      setInputValue(value);
    }
  };

  const handleImgClick = async () => {
    if (inputValue.trim() !== "") {
      try {
        const data = await getForecast(inputValue);
        if (dataContext?.saveData) {
          dataContext.saveData(data);
        }
      } catch (err) {
        if (err instanceof Error) {
          setError(`Ошибка при загрузке данных: ${err.message}`);
        } else {
          setError("Неизвестная ошибка при загрузке данных");
        }
      }
    } else {
      console.log("Пожалуйста, введите данные");
    }

    if (error) {
      return console.log(error);
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
      <S.HeadersSearch>
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
