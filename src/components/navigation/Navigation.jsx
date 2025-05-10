import { Link, Outlet } from 'react-router-dom';
import crown from '../../assets/crown.svg';
import { UserContext } from '../../context/userContext';
import { useContext } from 'react';
import { signOutUser } from '../../utils/firebase.utils';
import CartIcon from '../carIcon/CardIcon';
import CartDropdown from '../cart-dropdown/CartDropDown';
import { CartContext } from '../../context/cartContext';
// Styled Components

import {
  NavigationContainer,
  LogoContainer,
  NavLinksContainer,
  NavLink,
} from './navigation.styles';

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);
  // console.log(currentUser);

  return (
    <>
      <NavigationContainer>
        <LogoContainer to="/">
          <img src={crown} alt="Crown Logo" />
        </LogoContainer>

        <NavLinksContainer>
          <NavLink to="/shop">SHOP</NavLink>
          {currentUser ? (
            <span className="nav-links" onClick={signOutUser}>
              SIGN OUT
            </span>
          ) : (
            <NavLink to="/auth">SIGN IN</NavLink>
          )}
          <CartIcon />
        </NavLinksContainer>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>

      <Outlet />
    </>
  );
};

export default Navigation;
