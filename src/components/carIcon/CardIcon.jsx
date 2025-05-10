import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../../context/cartContext';
import shoppingsvg from '../../assets/shopping-bag.svg';
import {
  CartIconContainer,
  ItemCount,
  ShoppingIcon,
} from './cart-icons.styles';

// import './cart-icons.styles.scss';

const CardIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);
  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon src={shoppingsvg} alt="Shopping Icon" />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CardIcon;
