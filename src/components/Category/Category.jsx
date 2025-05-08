import { useParams } from 'react-router-dom';
import { CategoriesContext } from '../../context/categoriesContext';
import { useContext, useEffect, useState } from 'react';
import ProductCard from '../productCard/ProductCard';
import './category.styles.scss';

const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState(categoriesMap[category]);

  //  TODO ---  console.log('Redering');

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [categoriesMap, category]);

  return (
    <div className="category-container">
      {products &&
        products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
    </div>
  );
};

export default Category;
