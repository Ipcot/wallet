const { userSearch, createUser, login, logout } = require('../services/auth');
const {
  hashingPassword,
  comparePassword,
} = require('../helpers/handlerPassword');
const RequestError = require('../helpers/RequestError');
const tokenCreater = require('../helpers/createToken');
const { SECRET_KEY } = process.env;

const registerController = async (req, res) => {
  const { name, email, password } = req.body;
  const user = await userSearch(email);
  if (user) {
    throw RequestError(409, 'Email in use');
  }
  const hashedPass = await hashingPassword(password);
  const result = await createUser(name, email, hashedPass);
  res.status(201).json({
    name: result.name,
    email: result.email,
    password: result.password,
  });
};

const loginController = async (req, res) => {
  const { email, password } = req.body;
  const user = await userSearch(email);
  const passCompare = await comparePassword(password, user.password);

  if (!user || !passCompare) {
    throw RequestError(401, 'Email or password is wrong');
  }

  const token = tokenCreater({ id: user._id }, SECRET_KEY);
  await login(user._id, { token });
  res.status(200).json({
    status: 'success',
    code: 200,
    data: {
      name: user.name,
      token,
    },
  });
};

const logoutController = async (req, res) => {
  const { _id } = req.user;
  await logout(_id, { token: null });
  res.status(204).json('No Content');
};

const getCurrent = async (req, res) => {
  const { name, balance } = req.user;
  res.json({ name, balance });
};

module.exports = {
  registerController,
  loginController,
  logoutController,
  getCurrent,
};
