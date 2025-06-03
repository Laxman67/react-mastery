import { Fragment } from 'react';
import Categorypreview from '../../components/category-preview/Categorypreview';
import './collection.styles.scss';
import { useSelector } from 'react-redux';
import { selectCategoriesMap } from '../../store/Categories/CategorySelector';

const CollectionPreview = () => {
  const categoriesMap = useSelector(selectCategoriesMap);
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
