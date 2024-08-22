import { useCallback, useEffect, useState } from "react";
import getForecast from "../api/getForecast/getForecast";
import * as S from "./forecast.style";
import ForecastDays from "./forecastDays/forecastDays";
import ForecastGetInfo from "./forecastDayInfo/forecastDayInfo";
import Loading from "../loading/loading";
import { useDataContext, useTheme } from "../context/useData";
import { ForecastData } from "../type";

export default function Forecast() {
  const [forecastData, setForecastData] = useState<ForecastData | null>(null);
  const [selectDay, setSelectDay] = useState<number>(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const dataContext = useDataContext();
  const { theme } = useTheme();

  const handleSelectDay = useCallback((index: number) => {
    setSelectDay(index);
  }, []);

  useEffect(() => {
    if (dataContext?.data === null) {
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
    } else {
      setForecastData(dataContext!.data);
      setLoading(false);
    }
  }, [dataContext]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!forecastData) {
    return null;
  }

  const forecastList = forecastData.forecast.forecastday;
  const selectedForecast = forecastList[selectDay];

  return (
    <>
      <S.Wether theme={theme}>
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
