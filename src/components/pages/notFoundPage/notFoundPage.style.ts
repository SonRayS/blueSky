import styled, { keyframes } from "styled-components";

const scaleUpCenter = keyframes`
  0%,
  100% {
    -webkit-transform: translateX(0%);
            transform: translateX(0%);
    -webkit-transform-origin: 50% 50%;
            transform-origin: 50% 50%;
  }
  15% {
    -webkit-transform: translateX(-30px) rotate(-6deg);
            transform: translateX(-30px) rotate(-6deg);
  }
  30% {
    -webkit-transform: translateX(15px) rotate(6deg);
            transform: translateX(15px) rotate(6deg);
  }
  45% {
    -webkit-transform: translateX(-15px) rotate(-3.6deg);
            transform: translateX(-15px) rotate(-3.6deg);
  }
  60% {
    -webkit-transform: translateX(9px) rotate(2.4deg);
            transform: translateX(9px) rotate(2.4deg);
  }
  75% {
    -webkit-transform: translateX(-6px) rotate(-1.2deg);
            transform: translateX(-6px) rotate(-1.2deg);
  }
`;

export const PageNotFound = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
`;

export const PageNotFoundImg = styled.img`
  margin: 32px;
  max-width: 512px;
  height: 512px;
  background-color: #ffffe0;
  border-radius: 12px;
  display: inline-block;
  animation: ${scaleUpCenter} 0.4s ease-out both;
  -webkit-animation: ${scaleUpCenter} 0.4s ease-out both;
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
  max-width: 512px;
  margin: 22px;
  width: -webkit-fill-available;
  height: 42px;
  border-radius: 12px;
  background-color: #ffffe0;
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

  & a {
    text-decoration: none;
    color: black;
  }
  &: hover {
    border: 2px solid aquamarine;
  }
`;

export const ModalBtnText = styled.p`
  text-decoration: none;
  color: #ffffff;
`;
