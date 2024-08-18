/* import getForecast from "../api/getGeoLocation/getForecast"; */
import Forecast from "../forecast/forecast";
import LocaleBlock from "../localeBlock/localeBlock";

export default function Body() {
  /* const date = getForecast(); */

  return (
    <>
      <LocaleBlock /> <Forecast />
    </>
  );
}
