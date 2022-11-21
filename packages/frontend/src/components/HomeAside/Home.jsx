import HomeButtons from './HomeButtons';
import CurrentBalance from './CurrentBalance';
import { AsideWrapper } from './Home.styled';

const Home = () => {
  return (
    <AsideWrapper>
      <HomeButtons />
      <CurrentBalance />
    </AsideWrapper>
  );
};
export default Home;
