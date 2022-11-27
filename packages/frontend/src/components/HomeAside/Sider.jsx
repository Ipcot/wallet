import HomeButtons from './HomeButtons';
import CurrentBalance from './CurrentBalance';
// import Grid from '@mui/material/Grid';
// import themeMaterial from '../../theme/themeMaterial';
// import { ThemeProvider } from '@mui/material/styles';
import { AsideWrapper, SydeBarWrapper } from './Sider.styled';
import Currency from 'components/currency/Currency';

const Sider = () => {
  return (
    // <ThemeProvider theme={themeMaterial}>
    //   <Grid container spacing={1}>
    //     <Grid item sm={12} md={6} lg={4}>
    //       <Grid item>
    //         <Grid item>
    //           <HomeButtons />
    //           <CurrentBalance />
    //         </Grid>
    //       </Grid>
    //     </Grid>
    //   </Grid>
    // </ThemeProvider>
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
