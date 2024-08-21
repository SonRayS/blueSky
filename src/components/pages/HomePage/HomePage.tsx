import Header from "../../header/header";
import { Container } from "../../globalStyle/global.style";
import Body from "../../body/body";
import Footer from "../../footer/footer";
import ThemeToggle from "../../themeSwitcher/themeSwither";

export default function HomePage() {
  return (
    <Container>
      <Header />
      <Body />
      <ThemeToggle />
      <Footer />
    </Container>
  );
}
