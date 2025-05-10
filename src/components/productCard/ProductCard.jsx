import Button, { BUTTON_TYPE_CLASSES } from '../../components/button/Button';
import './product-card.style.css';
import { useContext } from 'react';
import { CartContext } from '../../context/cartContext';
const ProductCard = ({ product }) => {
  const { addItemToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    addItemToCart(product);
  };

  const { name, imageUrl, price } = product;
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={name} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
        <Button
          buttonType={BUTTON_TYPE_CLASSES.inverted}
          onClick={handleAddToCart}
        >
          Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
