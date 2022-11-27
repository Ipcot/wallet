const getAllTransactions = state => state.transactions;

const getLoading = state => state.transactions.loading;

const getTransactionsSortedByCategory = state =>
  state.transactionsSortedByCategory;

const contactsSelectors = {
  getLoading,
  getAllTransactions,
  getTransactionsSortedByCategory,
};
export default contactsSelectors;
