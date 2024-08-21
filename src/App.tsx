import { Routes, Route } from "react-router-dom";
import { AppRoutes } from "./components/appRoutes/appRoutes";
import HomePage from "./components/pages/homePage/homePage";
import NotFoundPage from "./components/pages/notFoundPage/notFoundPage";

function App() {
  return (
    <Routes>
      <Route
        path={AppRoutes.HomePage}
        element={<HomePage />}
      />
      <Route
        path={AppRoutes.NotFoundPage}
        element={<NotFoundPage />}
      />
    </Routes>
  );
}

export default App;
