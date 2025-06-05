// import { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import CollectionPreview from '../components/collection-preview/CollectionPreview';
import Category from '../components/Category/Category';
import { useEffect } from 'react';
import { getCategoriesAndDocuments } from '../utils/firebase.utils';
import { useDispatch } from 'react-redux';
import { setCategories } from '../store/Categories/CategoryActions';
const Shop = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoriesArray = await getCategoriesAndDocuments('categories');
      console.log(categoriesArray);

      dispatch(setCategories(categoriesArray));
    };
    getCategoriesMap();
  });

  return (
    <Routes>
      <Route index element={<CollectionPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
