import styled from "styled-components";
import isPropValid from "@emotion/is-prop-valid";

export const LanguageBlock = styled.div.withConfig({
  shouldForwardProp: (prop) => isPropValid(prop),
})<{ theme: string }>`
  background-color: ${({ theme }) => (theme === "dark" ? "#292828" : "#ffffe0")};
  & label {
    color: ${({ theme }) => (theme === "dark" ? "#ffffff" : "#000000")};
  }
`;
