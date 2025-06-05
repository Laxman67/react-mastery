import { Outlet } from 'react-router-dom';
import crown from '../../assets/crown.svg';
import { signOutUser } from '../../utils/firebase.utils';
import CartIcon from '../carIcon/CardIcon';
import CartDropdown from '../cart-dropdown/CartDropdown';

// Styled Components

import {
  NavigationContainer,
  LogoContainer,
  NavLinksContainer,
  NavLink,
} from './navigation.styles';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../../store/User/UserSelector';
import { selectIsCartOpen } from '../../store/Cart/CartSelector';

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);
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
