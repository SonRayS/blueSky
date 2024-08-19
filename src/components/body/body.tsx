import Forecast from "../forecast/forecast";
import LocaleBlock from "../localeBlock/localeBlock";
import { BodyContainer } from "./body.style";

export default function Body() {
  return (
    <BodyContainer>
      <LocaleBlock />
      <Forecast />
    </BodyContainer>
  );
}
