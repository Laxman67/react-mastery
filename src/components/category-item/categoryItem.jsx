import React from 'react';
import './category-item.styles.scss';
const CategoryItem = ({ category }) => {
  const { imageUrl, title } = category;
  return (
    <>
      <div className="category-container">
        {/* src={imageUrl} alt={title} */}
        <img className="background-image" src={imageUrl} alt={title} />
        <div className="category-body-container">
          <h2>{title}</h2>
          <p>Shop Now</p>
        </div>
      </div>
    </>
  );
};

export default CategoryItem;
