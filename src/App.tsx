import { Routes, Route } from "react-router-dom";
import { AppRoutes } from "./components/AppRoutes/AppRoutes";
import NotFoundPage from "./components/pages/NotFoundPage/NotFoundPage";

function App() {
  return (
    <Routes>
      {/*       <Route
        path={AppRoutes.HomePage}
        element={<HomePage />}
      /> */}
      <Route
        path={AppRoutes.NotFoundPage}
        element={<NotFoundPage />}
      />
    </Routes>
  );
}

export default App;
