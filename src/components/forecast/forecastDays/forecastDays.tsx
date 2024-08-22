import * as S from "./forecastDays.style";
import { ForecastDay } from "../../type";
import { useTheme } from "../../context/useData";
import { useTranslation } from "react-i18next";
import React, { useMemo } from "react";

type ForecastDaysProps = {
  el: ForecastDay;
  index: number;
  selectDay: number;
  onClick: () => void;
};

const ForecastDays = React.memo(({ el, onClick, selectDay, index }: ForecastDaysProps) => {
  const { t } = useTranslation();
  const { theme } = useTheme();
  const isSelected = selectDay === index;

  const date = useMemo(() => new Date(el.date), [el.date]);
  const dayOfMonth = useMemo(() => date.getDate(), [date]);
  const monthNames = [
    "Января",
    "Февраля",
    "Марта",
    "Апреля",
    "Мая",
    "Июня",
    "Июля",
    "Августа",
    "Сентября",
    "Октября",
    "Ноября",
    "Декабря",
  ];
  const monthName = useMemo(() => monthNames[date.getMonth()], [date]);

  return (
    <S.WetherBlock
      isSelected={isSelected}
      onClick={onClick}
    >
      <S.WetherSelector
        isSelected={isSelected}
        theme={theme}
      >
        <S.WetherSelectorCard>
          <S.WetherSelectorCardImg
            src={el.day.condition.icon}
            alt={el.day.condition.text}
          />
          <S.WetherSelectorCardDays>{dayOfMonth}</S.WetherSelectorCardDays>
          <S.WetherSelectorCardMonth>{t(`${monthName}`)}</S.WetherSelectorCardMonth>
        </S.WetherSelectorCard>
      </S.WetherSelector>
    </S.WetherBlock>
  );
});

export default ForecastDays;
