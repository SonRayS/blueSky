import * as S from "./forecastDayInfo.style";

type forecastType = {
  el: object;
};

export default function ForecastGetInfo({ el }: forecastType) {
  console.log(el);
  return (
    <S.WetherMain>
      <S.WetherMainTable>
        <S.WetherMainTableHead>
          <tr>
            <td>
              <div>
                <img
                  src="/public/state.png"
                  alt=""
                />
              </div>
              Показатели
            </td>
            <td>ночь</td>
            <td>утро</td>
            <td>день</td>
            <td>вечер</td>
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
              Температура
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
              Скорость ветра
            </td>
            <td>{el.hour[3].wind_kph} км/ч</td>
            <td>{el.hour[9].wind_kph} км/ч</td>
            <td>{el.hour[14].wind_kph} км/ч</td>
            <td>{el.hour[20].wind_kph} км/ч</td>
          </tr>
          <tr>
            <td>
              <div>
                <img
                  src="/public/humidity.png"
                  alt=""
                />
              </div>
              Влажность
            </td>
            <td>{el.hour[3].humidity} %</td>
            <td>{el.hour[9].humidity} %</td>
            <td>{el.hour[14].humidity} %</td>
            <td>{el.hour[20].humidity} %</td>
          </tr>
        </S.WetherMainTableBody>
      </S.WetherMainTable>
    </S.WetherMain>
  );
}
