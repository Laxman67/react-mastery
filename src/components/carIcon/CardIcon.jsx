import React from 'react';
import shoppingsvg from '../../assets/shopping-bag.svg';
import {
  CartIconContainer,
  ItemCount,
  ShoppingIcon,
} from './cart-icons.styles';
import {
  selectCartCount,
  selectIsCartOpen,
} from '../../store/Cart/CartSelector';
import { setIsCartOpen } from '../../store/Cart/CartActions';
import { useDispatch, useSelector } from 'react-redux';

// import './cart-icons.styles.scss';
const CardIcon = () => {
  // const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
  const dispatch = useDispatch();
  const cartCount = useSelector(selectCartCount);
  const isCartOpen = useSelector(selectIsCartOpen);

  const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));
  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon src={shoppingsvg} alt="Shopping Icon" />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CardIcon;
