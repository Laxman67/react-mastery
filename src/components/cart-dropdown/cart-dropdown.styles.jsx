import styled from 'styled-components';
import {
  GoogleSignInButton,
  BaseButton,
  InvertedButton,
} from '../button/button.styles';
export const CartDropdownContainer = styled.div`
  position: absolute;
  top: 60px;
  right: 40px;
  width: 280px;
  height: 360px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid #ccc;
  background-color: #fff;
  z-index: 1000;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  border-radius: 10px;

  ${GoogleSignInButton}, {
  ${BaseButton}, {
  ${InvertedButton}, {
    margin-top: auto;
  }
`;
export const EmptyMessage = styled.span`
  font-size: 16px;
  margin: auto;
  color: #777;
`;
export const CartItems = styled.div`
  height: 100%;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
