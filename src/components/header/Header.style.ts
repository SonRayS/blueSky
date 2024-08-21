import styled from "styled-components";

export const Headers = styled.div`
  background-color: #ffffe0;
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
  background: darkblue;
  &:hover {
    cursor: pointer;
    transform: scale(1.02);
  }
`;

export const HeadersSearch = styled.div`
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
  flex-wrap: nowrap;
  border: 1px solid black;
  border-radius: 20px;
  flex-direction: row;
`;

export const HeadersSearchInput = styled.input`
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
  color: black;
  outline: none;
  border-radius: 20px;
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
