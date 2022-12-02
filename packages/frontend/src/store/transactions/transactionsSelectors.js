const getAllTransactions = state => state.stats.transactions;

const getLoading = state => state.stats.loading;

const getBalance = state => state.stats.balance;

const getTransactionsSortedByCategory = state =>
  state.stats.transactionsSortedByCategory;

const transactionsSelectors = {
  getLoading,
  getAllTransactions,
  getTransactionsSortedByCategory,
  getBalance,
};
export default transactionsSelectors;
