import HomeButtons from './HomeButtons';
import CurrentBalance from './CurrentBalance';
import Grid from '@mui/material/Grid';
import themeMaterial from '../../theme/themeMaterial';
import { ThemeProvider } from '@mui/material/styles';
// import { AsideWrapper } from './Home.styled';

const Home = () => {
  return (
    <ThemeProvider theme={themeMaterial}>
      <Grid container spacing={1}>
        <Grid item sm={12} md={6} lg={4}>
          <Grid item>
            <Grid item>
              <HomeButtons />
              <CurrentBalance />
            </Grid>
          </Grid>
        </Grid>
        <Grid item sm={12} md={6} lg={8} style={{ backgroundColor: 'pink' }}>
          STATISTIC + Table
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};
export default Home;
