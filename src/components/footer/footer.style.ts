import styled from "styled-components";
import isPropValid from "@emotion/is-prop-valid";

export const Footer = styled.div.withConfig({
  shouldForwardProp: (prop) => isPropValid(prop) && prop !== "isSelected",
})<{ theme: string }>`
  border-radius: 12px 12px 0 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 24px;
  position: center;
  bottom: 0;
  width: 100%;
  border-bottom: none;
  padding-right: 12px;
  z-index: 1000;
  background-color: ${({ theme }) => (theme === "dark" ? "#1f1e1e" : "#ffffe0")};

  @media screen and (max-width: 840px) {
    border-bottom: 1px solid black;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
`;

export const FooterBar = styled.div.withConfig({
  shouldForwardProp: (prop) => isPropValid(prop) && prop !== "isSelected",
})<{ theme: string }>`
  @media screen and (max-width: 840px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    border-bottom: 1px solid black;
    padding-bottom: 12px;
  }

  & p {
    color: ${({ theme }) => (theme === "dark" ? "#ffffff" : "#000000")};
    @media screen and (max-width: 840px) {
      margin: 4px 0;
      text-align: center;
      display: block;
      align-items: center;
    }
  }
`;
