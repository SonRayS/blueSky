import styled from "styled-components";

export const Wether = styled.div`
  background-color: #ffffe0;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  flex-wrap: nowrap;
  flex-direction: column;
  padding: 64px;
  position: absolute;
  left: 0;
  min-width: 100%;
  align-content: center;
  align-items: center;
  margin-top: 24px;
`;

export const WetherBlock = styled.div`
  padding: 24px;
  transition: transform 0.3s ease;
  border: 1px solid blue;
  border-radius: 12px;
`;

export const WetherMainInfo = styled.div`
  background: #faeecd;
`;

export const WetherSelector = styled.div`
  display: flex;
  min-width: 100%;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  flex-wrap: nowrap;
  flex-direction: row;
  margin-bottom: 32px;
  & div {
    padding: 16px;
    background: #faeecd;
    border-radius: 0 20px 0 0;
  }
`;

export const WetherSelectorCard = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

export const WetherSelectorCardImg = styled.img`
  width: 32px;
  height: 32px;
`;

export const WetherSelectorCardDays = styled.p`
  font-weight: 600;
  font-size: 24px;
`;

export const WetherSelectorCardMonth = styled.p`
  font-weight: 400;
  font-size: 18px;
`;
