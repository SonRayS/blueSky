import styled from "styled-components";
import isPropValid from "@emotion/is-prop-valid";

export const Headers = styled.div.withConfig({
  shouldForwardProp: (prop) => isPropValid(prop),
})<{ theme: string }>`
  background-color: ${({ theme }) => (theme === "dark" ? "#292828" : "#ffffe0")};
  border-radius: 0px 0px 12px 12px;
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  flex-direction: row;
  align-content: center;
  align-items: center;
  padding: 12px 32px 12px 32px;
  margin-bottom: 24px;
`;

export const HeadersLogo = styled.img`
  width: 64px;
  border-radius: 12px;
  height: 64px;
  transition: transform 0.3s ease;
  &:hover {
    cursor: pointer;
    transform: scale(1.02);
  }
`;

export const HeadersSearch = styled.div.withConfig({
  shouldForwardProp: (prop) => isPropValid(prop),
})<{ hasInputError: boolean }>`
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
  flex-wrap: nowrap;
  border: ${({ hasInputError }) => (hasInputError ? "1px solid red" : "1px solid #323232")};
  border-radius: 20px;
  flex-direction: row;
`;

export const HeadersSearchInput = styled.input.withConfig({
  shouldForwardProp: (prop) => isPropValid(prop),
})<{ theme: string }>`
  -webkit-box-flex: 100;
  -ms-flex-positive: 100;
  flex-grow: 100;
  border: none;
  padding: 6px;
  padding-left: 12px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  outline: none;
  border-radius: 20px;
  background: ${({ theme }) => (theme === "dark" ? "#323232" : "#ffffff")};
  color: ${({ theme }) => (theme === "dark" ? "#ffffff" : "#000000")};
`;

export const HeadersSearchImg = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 6px;
  margin-left: 6px;
  stroke: #ffffff;
  fill: transparent;
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.1);
    cursor: pointer;
  }
`;
