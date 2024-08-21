import Forecast from "../forecast/forecast";
import LocaleBlock from "../localeBlock/localeBlock";
import { BodyContainer } from "./body.style";

export default function Body(): JSX.Element {
  return (
    <BodyContainer>
      <LocaleBlock />
      <Forecast />
    </BodyContainer>
  );
}
