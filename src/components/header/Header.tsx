import * as S from "./Header.style";

export default function Header() {
  return (
    <S.Headers>
      <S.HeadersLogo
        src="/public/Logo.png"
        alt="Logo"
      />
      <S.HeadersSearch>
        <S.HeadersSearchInput
          type="search"
          placeholder="Поиск"
          name="search"
        />
        <S.HeadersSearchImg
          src="/public/search.png"
          alt="Logo"
        />
      </S.HeadersSearch>
    </S.Headers>
  );
}
