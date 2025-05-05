import './cart-dropdown.styles.scss';
import Button from '../button/Button';
const CartDropdown = () => {
  return (
    <div className="cart-dropdown-container">
      <div className="cart-item" />
      <Button buttonType="">GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;
