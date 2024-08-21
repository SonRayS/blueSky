import styled from "styled-components";

export const Wether = styled.div`
  background: #faeecd;
  padding: 32px;
  border-radius: 12px;
  margin-bottom: 32px;
  padding-bottom: 16px;
`;

export const WetherMain = styled.div`
  @media (max-width: 840px) {
    overflow-x: auto;
    padding: 16px;
  }
`;

export const WetherMainTableContainer = styled.div`
  width: 100%;
  overflow-x: auto;
  position: relative;

  &::after {
    content: "";
    display: block;
    height: 24px;
    width: 100%;
  }

  @media (max-width: 840px) {
    display: block;
    white-space: nowrap;
  }
`;

export const WetherMainTable = styled.table`
  margin: 0 auto;
  table-layout: fixed;
  width: 100%;

  @media (max-width: 840px) {
    width: max-content;
  }
`;

export const WetherMainTableHead = styled.thead`
  & tr {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-content: center;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid black;
    padding-bottom: 12px;
    padding-top: 12px;

    & td {
      flex: 1;
      margin: 24px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #f8f8f8;

      & div {
        display: flex;
        align-items: center;

        & img {
          margin-right: 12px;
          width: 32px;
          height: 32px;
        }
      }
    }
  }
`;

export const WetherMainTableBody = styled.tbody`
  & tr {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-content: center;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid black;
    padding-bottom: 8px;
    padding-top: 8px;

    & td {
      flex: 1;
      margin: 24px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #fff;

      & div {
        display: flex;
        align-items: center;
        & img {
          margin-right: 12px;
          width: 32px;
          height: 32px;
        }
      }
    }
  }
`;
