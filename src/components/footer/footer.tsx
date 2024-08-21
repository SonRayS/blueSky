import { useTranslation } from "react-i18next";
import { useTheme } from "../context/useData";
import * as S from "./footer.style";

export default function Footer() {
  const { theme } = useTheme();
  const { t } = useTranslation();
  return (
    <S.Footer theme={theme}>
      <S.FooterBar theme={theme}>
        <p>{t("Все права защищены")}</p>
        <p>{t("Информацию взято с сайта: WetherApi.com")}</p>
      </S.FooterBar>
      <S.FooterBar theme={theme}>
        <p>{t("Контакт разработчика")}</p>
        <p>email: grinpis01@gmail.com</p>
      </S.FooterBar>
    </S.Footer>
  );
}
