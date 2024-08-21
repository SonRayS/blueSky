import styled from "styled-components";
import isPropValid from "@emotion/is-prop-valid";

export const ThemeToggleWrapper = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
`;

export const ToggleButton = styled.button.withConfig({
  shouldForwardProp: (prop) => isPropValid(prop) && prop !== "isSelected",
})<{ theme: string }>`
  padding: 10px 20px;
  background-color: ${({ theme }) => (theme === "light" ? "#fff" : "#333")};
  color: ${({ theme }) => (theme === "light" ? "#000" : "#fff")};
  border: 2px solid ${({ theme }) => (theme === "light" ? "#000" : "#fff")};
  cursor: pointer;
  border-radius: 12px;

  &:hover {
    background-color: ${({ theme }) => (theme === "light" ? "#f0f0f0" : "#444")};
  }
`;
