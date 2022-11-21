const { User } = require('../schemas/user');

const createUser = async (name, email, password) => {
  const user = User.create({ name, email, password });
  return user;
};

const userSearch = async email => {
  const data = await User.findOne({ email });
  return data;
};

const login = async (id, token) => {
  const data = await User.findByIdAndUpdate(id, token);
  return data;
};

const logout = async (id, token) => {
  const data = await User.findByIdAndUpdate(id, token);
  return data;
};

module.exports = {
  userSearch,
  createUser,
  login,
  logout,
};
