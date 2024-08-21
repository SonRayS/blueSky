import styled from "styled-components";
import isPropValid from "@emotion/is-prop-valid";

export const Wether = styled.div.withConfig({
  shouldForwardProp: (prop) => isPropValid(prop),
})<{ theme: string }>`
  background-color: ${({ theme }) => (theme === "dark" ? "#1f1e1e" : "#ffffe0")};
  border-radius: 12px;
  display: flex;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  flex-wrap: nowrap;
  flex-direction: row;
  padding: 32px;
  left: 0;
  margin-bottom: 24px;
  min-width: 100%;
  align-content: center;
  align-items: center;
  margin-top: 24px;
  @media screen and (max-width: 840px) {
    flex-direction: column;
  }
`;
