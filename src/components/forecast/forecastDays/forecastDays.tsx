import * as S from "./forecastDays.style";

type forecastType = {
  el: object;
  key: number;
};

export default function ForecastGetInfo({ el }: forecastType) {
  console.log(el);

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

  return (
    <S.WetherBlock>
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
      <S.WetherMainInfo>
        <p>Температура: {el.day.maxtemp_c}</p> <p> Влажность: {el.day.avghumidity}</p>
        <p>Скор.ветра: {el.day.maxwind_kph}</p>
      </S.WetherMainInfo>
    </S.WetherBlock>
  );
}
