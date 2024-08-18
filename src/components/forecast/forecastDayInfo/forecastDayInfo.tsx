import * as S from "./forecastDayInfo.style";

type forecastType = {
  el: object;
};

export default function ForecastGetInfo({ el }: forecastType) {
  return (
    <S.WetherMainInfo>
      <p>Температура: {el.day.maxtemp_c}</p> <p> Влажность: {el.day.avghumidity}</p>
      <p>Скор.ветра: {el.day.maxwind_kph}</p>
    </S.WetherMainInfo>
  );
}
