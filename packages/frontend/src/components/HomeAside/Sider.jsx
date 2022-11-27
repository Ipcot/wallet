import HomeButtons from './HomeButtons';
import CurrentBalance from './CurrentBalance';
import { AsideWrapper, SydeBarWrapper } from './Sider.styled';
import Currency from 'components/currency/Currency';

const Sider = () => {
  return (
    <SydeBarWrapper>
      <AsideWrapper>
        <HomeButtons />
        <CurrentBalance />
      </AsideWrapper>
      <Currency />
    </SydeBarWrapper>
  );
};
export default Sider;
