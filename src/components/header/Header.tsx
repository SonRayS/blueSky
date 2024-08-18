import { Link } from "react-router-dom";
import * as S from "./header.style";
import { AppRoutes } from "../appRoutes/appRoutes";

export default function Header() {
  return (
    <S.Headers>
      <Link to={AppRoutes.HomePage}>
        <S.HeadersLogo
          src="/public/Logo.png"
          alt="Logo"
        />
      </Link>
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
