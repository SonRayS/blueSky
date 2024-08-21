import { Link } from "react-router-dom";
import { PageNotFoundImg, ModalButton, PageNotFound } from "./notFoundPage.style";
import { AppRoutes } from "../../appRoutes/appRoutes";

function NotFoundPage() {
  return (
    <>
      <PageNotFound>
        <PageNotFoundImg
          src="/public/NotFound.jpeg"
          alt="Page not found :C"
        />
        <ModalButton>
          <Link to={AppRoutes.HomePage}>Return to main page</Link>
        </ModalButton>
      </PageNotFound>
    </>
  );
}

export default NotFoundPage;
