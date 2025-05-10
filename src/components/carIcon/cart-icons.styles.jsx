import styled from 'styled-components';

export const ShoppingIcon = styled.img`
  width: 24px;
  height: 24px;
`;

export const CartIconContainer = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

export const ItemCount = styled.span`
  position: absolute;
  bottom: 6px;
  right: 4px;
  background-color: #ff4136;
  color: white;
  font-size: 12px;
  font-weight: bold;
  padding: 2px 6px;
  border-radius: 50%;
  min-width: 20px;
  text-align: center;
  line-height: 1;
`;
