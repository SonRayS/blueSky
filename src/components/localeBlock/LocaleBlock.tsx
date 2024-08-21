import { useDataContext } from "../context/useData";
import * as S from "./localeBlock.style";

export default function LocaleBlock() {
  const dataContext = useDataContext();
  const location = dataContext?.data?.location;
  const dateTimeString = location?.localtime || "";

  const parts = dateTimeString ? dateTimeString.split(" ") : [];
  const time = parts[1] || "Неизвестно";

  return (
    <S.LocaleBlock>
      <S.LocaleBlockOptions>
        <S.LocaleBlockCityImg
          src="public/City.png"
          alt=""
        />
        <p>Город - {location?.name || "Неизвестно"}</p>
      </S.LocaleBlockOptions>
      <S.LocaleBlockOptions>
        <S.LocaleBlockTimeImg
          src="public/Time.png"
          alt=""
        />
        <p>Местное время - {time}</p>
      </S.LocaleBlockOptions>
      <S.LocaleBlockOptions>
        <S.LocaleBlockTimeImg
          src="public/Language.png"
          alt=""
        />
        <p>Язык - русский</p>
      </S.LocaleBlockOptions>
    </S.LocaleBlock>
  );
}
