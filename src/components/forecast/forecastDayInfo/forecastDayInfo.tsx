import * as S from "./forecastDayInfo.style";
import { ForecastDay } from "../../type";
import { useTheme } from "../../context/useData";
import { useTranslation } from "react-i18next";

type forecastType = {
  el: ForecastDay;
};

export default function ForecastGetInfo({ el }: forecastType) {
  const { t } = useTranslation();
  const { theme } = useTheme();
  return (
    <S.Wether theme={theme}>
      <S.WetherMain>
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
                    src="/public/state.png"
                    alt=""
                  />
                </div>
                {t("Показатели")}
              </td>
              <td>
                <div>
                  <img
                    src="/public/cloudy.png"
                    alt=""
                  />
                </div>
                {t("ночь")}
              </td>
              <td>
                <div>
                  <img
                    src="/public/morning.png"
                    alt=""
                  />
                </div>
                {t("утро")}
              </td>
              <td>
                <div>
                  <img
                    src="/public/sun.png"
                    alt=""
                  />
                </div>
                {t("день")}
              </td>
              <td>
                <div>
                  <img
                    src="/public/evning.png"
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
                    src="/public/temperature.png"
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
                    src="/public/anemometer.png"
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
                    src="/public/humidity.png"
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
}
