import Media from 'react-media';
import { cardRender } from './helpers/cardRender';
import { tableRender } from './helpers/tableRender';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { BoxButton } from './index.styled';
import Modal from 'hocs/Modal';
import TransactionModal from 'components/transactionModal/TransactionModal';
import { useState } from 'react';

// function createData(date, type, category, comment, sum, balance) {
//   return { date, type, category, comment, sum, balance };
// }

const datas = [
  // createData('01.05.2020', '-', 'Other', 'eat', 300.0, 6900.0),
  // createData('02.05.2020', '+', 'Other', 'salary', 900.0, 6900.0),
  // createData('03.05.2020', '-', 'Other', 'food', 1500.0, 6900.0),
  // createData('04.05.2020', '+', 'Other', 'sport', 250.0, 6900.0),
  // createData('05.05.2020', '-', 'Other', 'gift', 3000.0, 6900.0),
];

const Home = () => {
  const [isOpen, setOpen] = useState(false);
  const handleOpenModal = () => {
    setOpen(true);
  };
  const handleCloseModal = () => {
    setOpen(false);
  };

  return (
    <>
      {datas.length ? (
        <Media queries={{ small: '(max-width: 767px)' }}>
          {matches => (matches.small ? cardRender() : tableRender())}
        </Media>
      ) : null}
      <BoxButton sx={{ '& > :not(style)': { m: 1 } }}>
        <Fab
          color="primary"
          aria-label="add"
          sx={{ width: 44, height: 44 }}
          onClick={() => handleOpenModal()}
        >
          <AddIcon sx={{ fontSize: 30 }} />
        </Fab>
      </BoxButton>
      {isOpen && (
        <Modal
          aria-labelledby="modal-add-transaction"
          onClose={handleCloseModal}
        >
          <TransactionModal closeModal={handleCloseModal} />
        </Modal>
      )}
    </>
  );
};
export default Home;
