import { useEffect, useState } from "react";
import getForecast from "../api/getForecast/getForecast";
import * as S from "./forecast.style";
import ForecastDays from "./forecastDays/forecastDays";
import ForecastGetInfo from "./forecastDayInfo/forecastDayInfo";
import Loading from "../loading/loading";
import { useDataContext } from "../context/useData";

export default function Forecast() {
  const [forecastData, setForecastData] = useState<object | null>(null);
  const [selectDay, setSelectDay] = useState<number>(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const dataContext = useDataContext();

  function handleSelectDay(index: number) {
    setSelectDay(index);
  }

  useEffect(() => {
    async function fetchForecast() {
      try {
        const data = await getForecast();
        setForecastData(data);
        if (dataContext?.saveData) {
          dataContext.saveData(data);
        }
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
  }, [dataContext]);

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
