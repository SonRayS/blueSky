import { useTheme } from "../context/useData";
import * as S from "./footer.style";

export default function Footer() {
  const { theme } = useTheme();
  return (
    <S.Footer theme={theme}>
      <S.FooterBar theme={theme}>
        <p>Все права защищены</p>
        <p>Информацию взято с сайта: WetherApi.com </p>
      </S.FooterBar>
      <S.FooterBar theme={theme}>
        <p>Контакт админимтратора</p>
        <p>email: grinpis01@gmail.com</p>
      </S.FooterBar>
    </S.Footer>
  );
}
