import Button from '../../components/button/Button';
import './product-card.style.css';
const ProductCard = ({ product }) => {
  const { name, imageUrl, price } = product;
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={name} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
        <Button buttonType="inverted">Add to Cart</Button>
      </div>
    </div>
  );
};

export default ProductCard;
