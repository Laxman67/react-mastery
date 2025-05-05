import React from 'react';
import shoppingicon from '../../assets/shopping-bag.svg';
import { useContext } from 'react';
import { CartContext } from '../../context/cartContext';

import './cart-icons.styles.scss';

const CardIcon = () => {
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);
  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);
  return (
    <div className="cart-icon-container" onClick={toggleIsCartOpen}>
      <img src={shoppingicon} alt="Shopping Icon" />
      <span className="item-count">0</span>
    </div>
  );
};

export default CardIcon;
