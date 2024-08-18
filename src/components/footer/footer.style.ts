import styled from "styled-components";

export const Footer = styled.div`
  background: #ffffe0;
  border-radius: 12px 12px 0 0;
  display: flex;
  justify-content: space-around;
  flex-wrap: nowrap;
  flex-direction: row;
  align-content: center;
  align-items: center;
  padding: 24px;
  position: absolute;
  bottom: 0;
  left: 0;
  min-width: 100%;
  padding: 10px;
  margin-top: 128px;
  border: 4px solid #4d858d;
  border-bottom: none;
`;

export const FooterBar = styled.div`
  & p {
    color: black;
  }
`;
