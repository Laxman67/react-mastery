import { Link, Outlet } from 'react-router-dom';
import crown from '../../assets/crown.svg';
import './navigation.styles.scss';

const Navigation = () => {
  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <img src={crown} alt="Crown Logo" />
        </Link>
        <div className="nav-link-container">
          <Link to="/shop" className="nav-link">
            SHOP
          </Link>
          <Link to="/auth" className="nav-link">
            SIGN IN
          </Link>
        </div>
      </div>

      <Outlet />
    </>
  );
};

export default Navigation;
