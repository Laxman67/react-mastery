import Button, { BUTTON_TYPE_CLASSES } from '../../components/button/Button';
import './product-card.style.css';
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart } from '../../store/Cart/CartActions';
import { selectCartItems } from '../../store/Cart/CartSelector';
const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const handleAddToCart = () => {
    dispatch(addItemToCart(cartItems, product));
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
