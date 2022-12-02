import Media from 'react-media';
import { СardRender } from './helpers/cardRender';
import { TableRender } from './helpers/tableRender';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { BoxButton, Title } from './index.styled';
import Modal from 'hocs/Modal';
import TransactionModal from 'components/transactionModal/TransactionModal';
import { useEffect, useState } from 'react';
import { useRedux } from 'hooks';
import {
  transactionsOperations,
  transactionsSelectors,
} from 'store/transactions';
import { useDispatch } from 'react-redux';

const Home = () => {
  const [selector] = useRedux();
  const transactions = selector(transactionsSelectors.getAllTransactions);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(transactionsOperations.fetchTransactions());
  }, []);
  const [isOpen, setOpen] = useState(false);
  const handleOpenModal = () => {
    setOpen(true);
  };
  const handleCloseModal = () => {
    setOpen(false);
  };

  return (
    <>
      {transactions.length ? (
        <Media queries={{ small: '(max-width: 767px)' }}>
          {matches =>
            matches.small ? (
              <СardRender data={transactions} />
            ) : (
              <TableRender data={transactions} />
            )
          }
        </Media>
      ) : (
        <div>Other</div>
      )}
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
