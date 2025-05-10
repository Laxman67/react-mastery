import styled from 'styled-components';

export const BackgroundImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  display: block;
  transition: transform 0.3s ease;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  background-size: cover;
  background-position: center;
`;

export const Body = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 16px;
  background-color: rgba(255, 255, 255, 0.8);
  text-align: center;
  transition: background-color 0.3s ease;

  h2 {
    margin: 0;
    font-size: 1.5rem;
  }

  p {
    margin-top: 4px;
    font-size: 1rem;
    font-weight: bold;
  }
`;

export const DirectoryItemContainer = styled.div`
  position: relative;
  overflow: hidden;
  border: 1px solid #ddd;
  border-radius: 10px;
  cursor: pointer;
  transition: transform 0.3s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: scale(1.03);

    ${Body} {
      background-color: rgba(0, 0, 0, 0.6);
      color: #fff;
    }
  }
`;
