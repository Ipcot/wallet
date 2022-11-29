import HomeButtons from './HomeButtons';
import CurrentBalance from './CurrentBalance';
import { AsideWrapper, SydeBarWrapper } from './Sider.styled';
import Currency from 'components/currency/Currency';
import Media from 'react-media';

const Sider = () => {
  return (
    <SydeBarWrapper>
      <AsideWrapper>
        <HomeButtons />
        <CurrentBalance />
      </AsideWrapper>
      <Media query="(min-width: 767px)" render={() => <Currency />} />
    </SydeBarWrapper>
  );
};
export default Sider;
