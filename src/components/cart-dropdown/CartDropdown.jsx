import './cart-dropdown.styles.scss';
import Button from '../button/Button';
import CartItem from './cart-item/CartItem';
import { CartContext } from '../../context/cartContext';
import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();
  const goToCheckoutHandler = () => {
    navigate('/checkout');
  };

  useEffect(() => {}, [cartItems]);
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} cartItem={cartItem} />
        ))}
      </div>
      <Button buttonType="" onClick={goToCheckoutHandler}>
        Go To Checkout
      </Button>
    </div>
  );
};

export default CartDropdown;
