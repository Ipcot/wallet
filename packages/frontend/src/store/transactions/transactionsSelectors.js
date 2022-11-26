const getAllTransactions = state => state.transactions;

const getLoading = state => state.transactions.loading;

const contactsSelectors = {
  getLoading,
  getAllTransactions,
};
export default contactsSelectors;
