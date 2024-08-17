import styled from "styled-components";

export const Wether = styled.div`
  background-color: #e3e2df;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  flex-wrap: nowrap;
  flex-direction: column;
  padding: 64px;
  position: absolute;
  left: 0;
  min-width: 100%;
  margin-bottom: 120px;
  align-content: center;
  align-items: center;
  margin-top: 24px;
  & img {
    width: 32px;
    height: 32px;
  }
`;

export const WetherSelect = styled.div`
  display: flex;
  min-width: 100%;
  justify-content: space-around;
  align-content: center;
  align-items: center;
  flex-wrap: nowrap;
  flex-direction: row;
  margin-bottom: 32px;
  & div {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-content: center;
    justify-content: center;
    align-items: center;
    gap: 8px;
  }
`;
