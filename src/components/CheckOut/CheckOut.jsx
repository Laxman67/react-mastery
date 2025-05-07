import './checkout.styles.scss';
import { CartContext } from '../../context/cartContext';
import { useContext } from 'react';
import CheckoutItem from './CheckoutItem/CheckoutItem';

const CheckOut = () => {
  const { cartItems, cartTotal } = useContext(CartContext);

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>

      <div className="checkout-items">
        {cartItems.map((cartItem) => (
          <CheckoutItem key={cartItem.id} cartItem={cartItem} />
        ))}
      </div>

      <div className="total">Total: ₹{cartTotal}</div>
    </div>
  );
};

export default CheckOut;
