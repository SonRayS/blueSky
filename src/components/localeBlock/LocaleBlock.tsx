import * as S from "./localeBlock.style";

export default function LocaleBlock() {
  return (
    <S.LocaleBlock>
      <S.LocaleBlockOptions>
        <S.LocaleBlockCityImg
          src="public/City.png"
          alt=""
        />
        <p>Город - Киев</p>
      </S.LocaleBlockOptions>
      <S.LocaleBlockOptions>
        <S.LocaleBlockTimeImg
          src="public/Time.png"
          alt=""
        />
        <p>Город - 15:32</p>
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
