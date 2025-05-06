import './cart-dropdown.styles.scss';
import Button from '../button/Button';
import CartItem from './cart-item/CartItem';
import { CartContext } from '../../context/cartContext';
import { useContext, useEffect } from 'react';
const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);

  useEffect(() => {}, [cartItems]);
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} cartItem={cartItem} />
        ))}
      </div>
      <Button buttonType="">GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;
