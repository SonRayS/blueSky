import { useEffect, useState } from "react";
import getForecast from "../api/getForecast/getForecast";
import * as S from "./forecast.style";
import ForecastDays from "./forecastDays/forecastDays";
import ForecastGetInfo from "./forecastDayInfo/forecastDayInfo";
import Loading from "../loading/loading";

export default function Forecast() {
  const [forecastData, setForecastData] = useState(null);
  const [selectDay, setSelectDay] = useState<number>(0);
  const [loading, setLoading] = useState(true); // Состояние загрузки
  const [error, setError] = useState<string | null>(null); // Состояние ошибки

  function handleSelectDay(index: number) {
    setSelectDay(index);
  }

  useEffect(() => {
    async function fetchForecast() {
      try {
        const data = await getForecast();
        setForecastData(data);
        setLoading(false);
      } catch (err) {
        if (err instanceof Error) {
          setError(`Ошибка при загрузке данных: ${err.message}`);
        } else {
          setError("Неизвестная ошибка при загрузке данных");
        }
        setLoading(false);
      }
    }

    fetchForecast();
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (!forecastData) {
    return null;
  }

  const forecastList = forecastData.forecast.forecastday;
  const selectedForecast = forecastList[selectDay];

  return (
    <>
      <S.Wether>
        {forecastList.map((el, index) => (
          <ForecastDays
            onClick={() => handleSelectDay(index)}
            el={el}
            index={index}
            key={index}
            selectDay={selectDay}
          />
        ))}
      </S.Wether>
      {selectedForecast && (
        <div>
          <ForecastGetInfo el={selectedForecast} />
        </div>
      )}
    </>
  );
}
