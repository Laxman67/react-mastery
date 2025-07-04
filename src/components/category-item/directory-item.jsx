import { useNavigate } from 'react-router-dom';
import './directory-item.styles.jsx';
import {
  BackgroundImage,
  Body,
  DirectoryItemContainer,
} from './directory-item.styles.jsx';
const CategoryItem = ({ category }) => {
  const { imageUrl, title, route } = category;
  const navigate = useNavigate();
  const onNavigateHandler = () => navigate(route);

  return (
    <>
      <DirectoryItemContainer onClick={onNavigateHandler}>
        {/* src={imageUrl} alt={title} */}
        <BackgroundImage src={imageUrl} alt={title} />
        <Body>
          <h2>{title}</h2>
          <p>Shop Now</p>
        </Body>
      </DirectoryItemContainer>
    </>
  );
};

export default CategoryItem;
