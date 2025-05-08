import { Fragment, useContext } from 'react';
import { CategoriesContext } from '../../context/categoriesContext';
import Categorypreview from '../../components/category-preview/Categorypreview';
import './collection.styles.scss';

const CollectionPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  return (
    <Fragment>
      {Object.keys(categoriesMap).map((title, index) => {
        const products = categoriesMap[title];
        return (
          <Categorypreview key={index} title={title} products={products} />
        );
      })}
    </Fragment>
  );
};

export default CollectionPreview;
