import { useEffect, useState } from "react";
import { useDataContext } from "../context/useData";
import startClock from "../startClock/startClock";
import * as S from "./localeBlock.style";

export default function LocaleBlock() {
  const dataContext = useDataContext();
  const location = dataContext?.data?.location;
  const dateTimeString = location?.localtime || "";

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
    <S.LocaleBlock>
      <S.LocaleBlockOptions>
        <S.LocaleBlockCityImg
          src="public/City.png"
          alt=""
        />
        <p>Город - {location?.name || "Неизвестно"}</p>
      </S.LocaleBlockOptions>
      <S.LocaleBlockOptions>
        <S.LocaleBlockTimeImg
          src="public/Time.png"
          alt=""
        />
        <p>Местное время - {currentTime}</p>
      </S.LocaleBlockOptions>
      <S.LocaleBlockOptions>
        <S.LocaleBlockTimeImg
          src="public/Language.png"
          alt=""
        />
        <p>Язык - русский</p>
      </S.LocaleBlockOptions>
    </S.LocaleBlock>
  );
}
