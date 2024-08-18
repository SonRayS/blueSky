import { useEffect, useState } from "react";
import getForecast from "../api/getForecast/getForecast";
import * as S from "./forecast.style";
import ForecastGetInfo from "./forecastDays/forecastDays";

export default function Forecast() {
  const [forecastData, setForecastData] = useState(null);

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

  return (
    <S.Wether>
      {forecastList.map((el, index) => (
        <ForecastGetInfo
          el={el}
          key={index}
        />
      ))}
    </S.Wether>
  );
}
