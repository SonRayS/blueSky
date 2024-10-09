import styled from "styled-components";
import isPropValid from "@emotion/is-prop-valid";

export const LanguageBlock = styled.div.withConfig({
  shouldForwardProp: (prop) => isPropValid(prop),
})<{ theme: string }>`
  background-color: ${({ theme }) => (theme === "dark" ? "#292828" : "#ffffe0")};
  & select {
    border-bottom: 1px solid white;
  }
  & label {
    color: ${({ theme }) => (theme === "dark" ? "#ffffff" : "#000000")};
  }
`;

export const LanguageSelect = styled.select.withConfig({
  shouldForwardProp: (prop) => isPropValid(prop),
})<{ theme: string }>`
  padding: 6px;
  background-color: #f0f0f0;
  font-size: 16px;
  outline: none;
  border-color: ${({ theme }) => (theme === "dark" ? "#292828" : "#ffffff")};
  color: ${({ theme }) => (theme === "dark" ? "#ffffff" : "#000000")};
  background-color: ${({ theme }) => (theme === "dark" ? "#292828" : "#ffffff")};
`;

export const LanguageOption = styled.option.withConfig({
  shouldForwardProp: (prop) => isPropValid(prop),
})<{ theme: string }>`
  border-color: ${({ theme }) => (theme === "dark" ? "#ffffff" : "#ffffff")};
  background-color: ${({ theme }) => (theme === "dark" ? "#292828" : "#ffffff")};
  color: ${({ theme }) => (theme === "dark" ? "#ffffff" : "#000000")};
`;
