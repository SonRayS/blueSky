import { PageNotFoundImg, ModalButton, PageNotFound } from "./NotFoundPage.style";

function NotFoundPage() {
  return (
    <>
      <PageNotFound>
        <PageNotFoundImg
          src="/public/Xm404.gif"
          alt="Page not found :C"
        />

        <ModalButton id="SignUpEnter">click</ModalButton>
      </PageNotFound>
    </>
  );
}

export default NotFoundPage;
