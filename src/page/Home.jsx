import Directory from '../components/directory/Directory';
const Home = () => {
  const categories = [
    {
      id: 1,
      title: 'Jackets',
      imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
    },
    {
      id: 2,
      title: 'Sneakers',
      imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
    },
    {
      id: 3,
      title: 'Womens',
      imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
    },
    {
      id: 4,
      title: 'Mens',
      imageUrl: 'https://i.ibb.co/R70vBrQ/mens.png',
    },
    {
      id: 5,
      title: 'Hats',
      imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
    },
    {
      id: 6,
      title: 'Watches',
      imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
    },
  ];
  return (
    <>
      <Directory categories={categories} />
    </>
  );
};

export default Home;
