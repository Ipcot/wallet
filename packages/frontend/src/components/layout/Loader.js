import { Dna } from 'react-loader-spinner';
import { Wrap } from './Loader.styled';

const Loader = () => {
  return (
    <Wrap>
      <Dna
        visible={true}
        height="80"
        width="80"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
      />
    </Wrap>
  );
};
export default Loader;
