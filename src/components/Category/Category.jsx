import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ProductCard from '../productCard/ProductCard';
import './category.styles.scss';
import { useSelector } from 'react-redux';
import { selectCategoriesMap } from '../../store/Categories/CategorySelector';

const Category = () => {
  const { category } = useParams();
  console.log('re-render / category component');
  const categoriesMap = useSelector(selectCategoriesMap);

  const [products, setProducts] = useState(categoriesMap[category]);

  //  TODO ---  console.log('Redering');

  useEffect(() => {
    console.log('effect fired calling setProducts');
    setProducts(categoriesMap[category]);
  }, [categoriesMap, category]);

  return (
    <>
      <div className="call-to-cation">{category}</div>
      <div className="category-container">
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </>
  );
};

export default Category;
