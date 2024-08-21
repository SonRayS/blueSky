import styled from "styled-components";
import isPropValid from "@emotion/is-prop-valid";

export const LocalContainer = styled.div.withConfig({
  shouldForwardProp: (prop) => isPropValid(prop),
})<{ theme: string }>`
  background-color: ${({ theme }) => (theme === "dark" ? "#292828" : "#ffffe0")};
  border-radius: 12px;
  display: flex;
  justify-content: center;
  flex-wrap: nowrap;
  flex-direction: row;
  align-content: center;
  align-items: center;
  padding: 12px 32px 12px 32px;
  @media screen and (max-width: 840px) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 12px;
  }
`;

export const LocaleBlock = styled.div.withConfig({
  shouldForwardProp: (prop) => isPropValid(prop),
})<{ theme: string }>`
  background-color: ${({ theme }) => (theme === "dark" ? "#292828" : "#ffffe0")};
  width: 100%;
  border-radius: 12px;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: nowrap;
  flex-direction: row;
  align-content: center;
  align-items: center;
  padding: 12px 32px 12px 32px;

  @media screen and (max-width: 840px) {
    background-color: ${({ theme }) => (theme === "dark" ? "#292828" : "#ffffe0")};
    border-radius: 6px;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: flex-start;
    padding: 12px 32px 12px 32px;
  }
`;

export const LocaleBlockCity = styled.div`
  display: flex;
  aline-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: center;
  align-items: center;
`;

export const LocaleBlockOptions = styled.div.withConfig({
  shouldForwardProp: (prop) => isPropValid(prop),
})<{ theme: string }>`
  display: flex;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: center;
  gap: 12px;
  margin: 12px;

  & p {
    color: ${({ theme }) => (theme === "dark" ? "#ffffff" : "#000000")};
  }
`;

export const LocaleBlockCityImg = styled.img`
  width: 32px;
  height: 32px;
`;
export const LocaleBlockCityTitle = styled.div``;

export const LocaleBlockTimeImg = styled.img`
  width: 32px;
  height: 32px;
`;
export const LocaleBlockTimeTitle = styled.div``;

export const LocaleBlockLanguageImg = styled.img`
  width: 32px;
  height: 32px;
`;
export const LocaleBlockLanguageTitle = styled.div``;
