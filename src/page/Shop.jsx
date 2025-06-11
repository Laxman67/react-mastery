// import { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import CollectionPreview from '../components/collection-preview/CollectionPreview';
import Category from '../components/Category/Category';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCategoriesStart } from '../store/Categories/CategoryActions';

const Shop = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategoriesStart());
  });

  return (
    <Routes>
      <Route index element={<CollectionPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
