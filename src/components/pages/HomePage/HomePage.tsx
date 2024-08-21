import Header from "../../header/header";
import { Container } from "../../globalStyle/global.style";
import Body from "../../body/body";
import Footer from "../../footer/footer";
import ThemeToggle from "../../themeSwitcher/themeSwitcher";

export default function HomePage() {
  return (
    <Container>
      <Header />
      <Body />
      <Footer />
      <ThemeToggle />
    </Container>
  );
}
