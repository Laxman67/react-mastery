import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const NavigationContainer = styled.div`
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
  padding: 0 40px;
  border-bottom: 1px solid #eaeaea;
  background-color: #fff;
  position: sticky;
  top: 0;
  z-index: 100;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    padding: 10px 20px;
  }
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  display: flex;
  align-items: center;
`;
export const NavLinksContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  @media (max-width: 768px) {
    margin-top: 10px;
    flex-wrap: wrap;
    gap: 12px;
    justify-content: center;
  }
`;

export const NavLink = styled(Link)`
  font-size: 16px;
  font-weight: 600;
  text-decoration: none;
  color: #333;
  cursor: pointer;
  transition: color 0.3s;

  &:hover {
    color: #007bff;
  }
`;
