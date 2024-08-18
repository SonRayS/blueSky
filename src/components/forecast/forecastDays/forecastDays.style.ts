import styled from "styled-components";

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
  min-width: 100%;
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
  width: 64px;
  height: 64px;
`;

export const WetherSelectorCardDays = styled.p`
  font-weight: 600;
  font-size: 24px;
`;

export const WetherSelectorCardMonth = styled.p`
  font-weight: 400;
  font-size: 18px;
`;
