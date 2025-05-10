import {
  CartDropdownContainer,
  CartItems,
  EmptyMessage,
} from './cart-dropdown.styles.jsx';
import Button, { BUTTON_TYPE_CLASSES } from '../button/Button';
import CartItem from './cart-item/CartItem';
import { CartContext } from '../../context/cartContext';
import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();
  const goToCheckoutHandler = () => {
    navigate('/checkout');
  };

  useEffect(() => {}, [cartItems]);
  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          ))
        ) : (
          <EmptyMessage>Your cart is Empty</EmptyMessage>
        )}
      </CartItems>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.base}
        onClick={goToCheckoutHandler}
      >
        Go To Checkout
      </Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
