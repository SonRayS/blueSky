import styled from "styled-components";

export const Footer = styled.div`
  background: #ffffe0;
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
`;

export const FooterBar = styled.div`
  & p {
    color: black;
  }
`;
