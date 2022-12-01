const getAllTransactions = state => state.stats.transactions;

const getLoading = state => state.stats.loading;

const getTransactionsSortedByCategory = state =>
  state.stats.transactionsSortedByCategory;

const transactionsSelectors = {
  getLoading,
  getAllTransactions,
  getTransactionsSortedByCategory,
};
export default transactionsSelectors;
