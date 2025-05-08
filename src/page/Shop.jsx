// import { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import CollectionPreview from '../components/collection-preview/CollectionPreview';
import Category from '../components/Category/Category';
const Shop = () => {
  // const { categoriesMap } = useContext(CategoriesContext);
  return (
    <Routes>
      <Route index element={<CollectionPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
