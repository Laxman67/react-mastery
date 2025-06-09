import { Fragment } from 'react';
import Categorypreview from '../../components/category-preview/Categorypreview';
import './collection.styles.scss';
import { useSelector } from 'react-redux';
import {
  selectCategoriesIsLoading,
  selectCategoriesMap,
} from '../../store/Categories/CategorySelector';
import Spinner from '../Spinner/Spinner';

const CollectionPreview = () => {
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);
  return (
    <Fragment>
      {isLoading ? (
        <Spinner />
      ) : (
        Object.keys(categoriesMap).map((title, index) => {
          const products = categoriesMap[title];
          return (
            <Categorypreview key={index} title={title} products={products} />
          );
        })
      )}
    </Fragment>
  );
};

export default CollectionPreview;
