import { useEffect, useState } from "react";
import { useDataContext, useTheme } from "../context/useData";
import startClock from "../startClock/startClock";
import * as S from "./localeBlock.style";

export default function LocaleBlock() {
  const dataContext = useDataContext();
  const location = dataContext?.data?.location;
  const dateTimeString = location?.localtime || "";
  const { theme } = useTheme();
  const parts = dateTimeString ? dateTimeString.split(" ") : [];
  const initialTime = parts[1] || "Неизвестно";
  const [currentTime, setCurrentTime] = useState<string>(startClock(initialTime));

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(startClock(initialTime));
    }, 1000);

    return () => clearInterval(intervalId);
  }, [initialTime]);

  return (
    <S.LocaleBlock theme={theme}>
      <S.LocaleBlockOptions theme={theme}>
        <S.LocaleBlockCityImg
          src="public/City.png"
          alt=""
        />
        <p>Город - {location?.name || "Неизвестно"}</p>
      </S.LocaleBlockOptions>
      <S.LocaleBlockOptions theme={theme}>
        <S.LocaleBlockTimeImg
          src="public/Time.png"
          alt=""
        />
        <p>Местное время - {currentTime}</p>
      </S.LocaleBlockOptions>
      <S.LocaleBlockOptions theme={theme}>
        <S.LocaleBlockTimeImg
          src="public/Language.png"
          alt=""
        />
        <p>Язык - русский</p>
      </S.LocaleBlockOptions>
    </S.LocaleBlock>
  );
}
