import { Link, Outlet } from 'react-router-dom';
import crown from '../../assets/crown.svg';
import './navigation.styles.scss';
import { UserContext } from '../../context/userContext';
import { useContext } from 'react';
import { signOutUser } from '../../utils/firebase.utils';

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  // console.log(currentUser);

  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <img src={crown} alt="Crown Logo" />
        </Link>

        <div className="nav-links-container">
          <Link to="/shop" className="nav-link">
            SHOP
          </Link>

          {currentUser ? (
            <span className="nav-links" onClick={signOutUser}>
              SIGN OUT
            </span>
          ) : (
            <Link to="/auth" className="nav-link">
              SIGN IN
            </Link>
          )}
        </div>
      </div>

      <Outlet />
    </>
  );
};

export default Navigation;
