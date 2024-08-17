import styled from "styled-components";

export const PageNotFound = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: center;
  align-items: center;
`;

export const PageNotFoundImg = styled.img`
  margin: 32px;
  @media screen and (max-width: 1400px) {
    width: 256px;
    height: 256px;
  }
  @media screen and (max-width: 800px) {
    width: 128px;
    height: 128px;
  }
`;

export const ModalButton = styled.button`
  margin: 22px;
  width: -webkit-fill-available;
  height: 42px;
  border-radius: 4px;
  background-color: #565eef;
  border: none;
  font-size: 18px;
  font-weight: 500;
  margin-right: 20px;
  text-decoration: none;
  display: flex;
  flex-direction: row;
  align-content: center;
  align-items: center;
  justify-content: center;
  flex-wrap: nowrap;
  padding: 12px;
`;

export const ModalBtnText = styled.p`
  text-decoration: none;
  color: #ffffff;
`;
