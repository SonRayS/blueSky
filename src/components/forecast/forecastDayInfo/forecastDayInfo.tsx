import * as S from "./forecastDayInfo.style";
import { ForecastDay } from "../../type";
import { useTheme } from "../../context/useData";
import { useTranslation } from "react-i18next";
import React, { useEffect, useRef, useState } from "react";

type forecastType = {
  el: ForecastDay;
};

const ForecastGetInfo = React.memo(({ el }: forecastType) => {
  const { t } = useTranslation();
  const { theme } = useTheme();
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (scrollRef.current?.offsetLeft || 0));
    setScrollLeft(scrollRef.current?.scrollLeft || 0);
  };

  useEffect(() => {
    const currentRef = scrollRef.current;

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging || !currentRef) return;
      e.preventDefault();
      const x = e.pageX - (currentRef.offsetLeft || 0);
      const walk = (x - startX) * 1;
      currentRef.scrollLeft = scrollLeft - walk;
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    if (currentRef) {
      currentRef.addEventListener("mousemove", handleMouseMove);
      currentRef.addEventListener("mouseup", handleMouseUp);
      currentRef.addEventListener("mouseleave", handleMouseUp);
    }

    return () => {
      if (currentRef) {
        currentRef.removeEventListener("mousemove", handleMouseMove);
        currentRef.removeEventListener("mouseup", handleMouseUp);
        currentRef.removeEventListener("mouseleave", handleMouseUp);
      }
    };
  }, [isDragging, startX, scrollLeft]);

  return (
    <S.Wether theme={theme}>
      <S.WetherMain
        ref={scrollRef}
        onMouseDown={handleMouseDown}
      >
        <S.WetherMainTable>
          <S.WetherMainTableHead>
            <tr>
              <td>
                <img
                  src={el.day.condition.icon}
                  alt=""
                />
                {t(`${el.day.condition.text}`)}
              </td>
            </tr>
            <tr>
              <td>
                <div>
                  <img
                    src="/state.png"
                    alt=""
                  />
                </div>
                {t("Показатели")}
              </td>
              <td>
                <div>
                  <img
                    src="/cloudy.png"
                    alt=""
                  />
                </div>
                {t("ночь")}
              </td>
              <td>
                <div>
                  <img
                    src="/morning.png"
                    alt=""
                  />
                </div>
                {t("утро")}
              </td>
              <td>
                <div>
                  <img
                    src="/sun.png"
                    alt=""
                  />
                </div>
                {t("день")}
              </td>
              <td>
                <div>
                  <img
                    src="/evning.png"
                    alt=""
                  />
                </div>
                {t("вечер")}
              </td>
            </tr>
          </S.WetherMainTableHead>
          <S.WetherMainTableBody>
            <tr>
              <td>
                <div>
                  <img
                    src="/temperature.png"
                    alt=""
                  />
                </div>
                {t("Температура")}
              </td>
              <td>{el.hour[3].temp_c}°</td>
              <td>{el.hour[9].temp_c}°</td>
              <td>{el.hour[14].temp_c}°</td>
              <td>{el.hour[20].temp_c}°</td>
            </tr>
            <tr>
              <td>
                <div>
                  <img
                    src="/anemometer.png"
                    alt=""
                  />
                </div>
                {t("Скор. ветра")}
              </td>
              <td>
                {el.hour[3].wind_kph} {t("км/ч")}
              </td>
              <td>
                {el.hour[9].wind_kph} {t("км/ч")}
              </td>
              <td>
                {el.hour[14].wind_kph} {t("км/ч")}
              </td>
              <td>
                {el.hour[20].wind_kph} {t("км/ч")}
              </td>
            </tr>
            <tr>
              <td>
                <div>
                  <img
                    src="/humidity.png"
                    alt=""
                  />
                </div>
                {t("Влажность")}
              </td>
              <td>{el.hour[3].humidity} %</td>
              <td>{el.hour[9].humidity} %</td>
              <td>{el.hour[14].humidity} %</td>
              <td>{el.hour[20].humidity} %</td>
            </tr>
          </S.WetherMainTableBody>
        </S.WetherMainTable>
      </S.WetherMain>
    </S.Wether>
  );
});

export default ForecastGetInfo;
