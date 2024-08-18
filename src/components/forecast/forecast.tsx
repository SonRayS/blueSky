import { useEffect, useState } from "react";
import getForecast from "../api/getForecast/getForecast";
import * as S from "./forecast.style";
import ForecastDays from "./forecastDays/forecastDays";
import ForecastGetInfo from "./forecastDayInfo/forecastDayInfo";

export default function Forecast() {
  const [forecastData, setForecastData] = useState(null);
  const [selectDay, setSelectDay] = useState<number>(0);

  function handleSelectDay(index: number) {
    setSelectDay(index);
  }

  useEffect(() => {
    async function fetchForecast() {
      const data = await getForecast();
      setForecastData(data);
    }

    fetchForecast();
  }, []);

  if (!forecastData) {
    return <div>Loading...</div>;
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
