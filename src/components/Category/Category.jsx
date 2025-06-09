import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ProductCard from '../productCard/ProductCard';
import './category.styles.scss';
import { useSelector } from 'react-redux';
import {
  selectCategoriesIsLoading,
  selectCategoriesMap,
} from '../../store/Categories/CategorySelector';
import Spinner from '../Spinner/Spinner';

const Category = () => {
  const { category } = useParams();
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);

  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    console.log('effect fired calling setProducts');
    setProducts(categoriesMap[category]);
  }, [categoriesMap, category]);

  return (
    <>
      <div className="call-to-cation">{category}</div>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="category-container">
          {products &&
            products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </div>
      )}
    </>
  );
};

export default Category;
