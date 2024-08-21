import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./components/globalStyle/global.style.ts";
import { DataProvider } from "./components/context/dataContext.tsx";
import { ThemeContextProvider } from "./components/context/themeContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <DataProvider>
      <GlobalStyle />
      <ThemeContextProvider>
        <App />
      </ThemeContextProvider>
    </DataProvider>
  </BrowserRouter>
);
