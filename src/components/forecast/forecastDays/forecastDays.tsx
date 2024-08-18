import * as S from "./forecastDays.style";

type ForecastDaysProps = {
  el: object;
  index: number;
  selectDay: number;
  onClick: () => void;
};

export default function ForecastDays({ el, onClick, selectDay, index }: ForecastDaysProps) {
  const date = new Date(el.date);
  const dayOfMonth = date.getDate();
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
  const monthIndex = date.getMonth();
  const monthName = monthNames[monthIndex];

  const isSelected = selectDay === index;

  return (
    <S.WetherBlock
      isSelected={isSelected}
      onClick={onClick}
    >
      <S.WetherSelector>
        <S.WetherSelectorCard>
          <S.WetherSelectorCardImg
            src={el.day.condition.icon}
            alt={el.day.text}
          />
          <S.WetherSelectorCardDays>{dayOfMonth}</S.WetherSelectorCardDays>
          <S.WetherSelectorCardMonth>{monthName}</S.WetherSelectorCardMonth>
        </S.WetherSelectorCard>
      </S.WetherSelector>
    </S.WetherBlock>
  );
}
