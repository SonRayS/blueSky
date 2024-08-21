import styled, { keyframes } from "styled-components";

const scaleUpCenter = keyframes`
  0% {
    -webkit-transform: scale3d(1, 1, 1);
            transform: scale3d(1, 1, 1);
  }
  30% {
    -webkit-transform: scale3d(1.25, 0.75, 1);
            transform: scale3d(1.25, 0.75, 1);
  }
  40% {
    -webkit-transform: scale3d(0.75, 1.25, 1);
            transform: scale3d(0.75, 1.25, 1);
  }
  50% {
    -webkit-transform: scale3d(1.15, 0.85, 1);
            transform: scale3d(1.15, 0.85, 1);
  }
  65% {
    -webkit-transform: scale3d(0.95, 1.05, 1);
            transform: scale3d(0.95, 1.05, 1);
  }
  75% {
    -webkit-transform: scale3d(1.05, 0.95, 1);
            transform: scale3d(1.05, 0.95, 1);
  }
  100% {
    -webkit-transform: scale3d(1, 1, 1);
            transform: scale3d(1, 1, 1);
  }
`;

export const LoadingImg = styled.img`
  display: inline-block;
  animation: ${scaleUpCenter} 4s infinite both;
  -webkit-animation: ${scaleUpCenter} 4s infinite both;
`;

export const Loading = styled.div`
  display: flex;
  background-color: #ffffe0;
  border-radius: 12px;
  justify-content: center;
  align-items: center;
  align-content: center;
  flex-wrap: nowrap;
  flex-direction: row;
  background-color: #ffffe0;
  border-radius: 32px;
  padding: 24px;
  flex: 1;
  margin-bottom: 24px;
  & img {
    max-width: 512px;
    max-height: 256px;
    border-radius: 12px;
  }
`;
