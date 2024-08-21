import { useEffect, useState } from "react";
import { useDataContext, useTheme } from "../context/useData";
import startClock from "../startClock/startClock";
import * as S from "./localeBlock.style";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../languageSwitcher/languageSwitcher";

export default function LocaleBlock() {
  const { t } = useTranslation();
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
    <S.LocalContainer theme={theme}>
      <S.LocaleBlock theme={theme}>
        <S.LocaleBlockOptions theme={theme}>
          <S.LocaleBlockCityImg
            src="public/City.png"
            alt=""
          />
          <p>
            {t("Город")} - {location?.name || `${t("Неизвестно")}`}
          </p>
        </S.LocaleBlockOptions>
        <S.LocaleBlockOptions theme={theme}>
          <S.LocaleBlockTimeImg
            src="public/Time.png"
            alt=""
          />
          <p>
            {t("Местное время")} - {currentTime}
          </p>
        </S.LocaleBlockOptions>
        <S.LocaleBlockOptions theme={theme}>
          <S.LocaleBlockTimeImg
            src="public/Language.png"
            alt=""
          />
          <LanguageSwitcher />
        </S.LocaleBlockOptions>
      </S.LocaleBlock>
    </S.LocalContainer>
  );
}
