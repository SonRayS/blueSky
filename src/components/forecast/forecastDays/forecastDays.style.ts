import styled from "styled-components";

export const WetherContainer = styled.div``;

export const WetherBlock = styled.div<{ isSelected: boolean }>`
  padding: 24px;
  transition: transform 0.3s ease;
  border-bottom: 4px solid ${({ isSelected }) => (isSelected ? "red" : "blue")};
  cursor: pointer;

  &:hover {
    border-bottom: 4px solid ${({ isSelected }) => (isSelected ? "#AF2B1E" : "#3A5199")};
  }
`;

export const WetherSelector = styled.div`
  min-width: 100%;
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
  transition: transform 0.6s ease;
  &:hover {
    transform: scale(1.04);
    cursor: pointer;
  }
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
