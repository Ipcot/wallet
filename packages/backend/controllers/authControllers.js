const { userSearch, createUser, login, logout } = require('../services/auth');
const {
  hashingPassword,
  comparePassword,
} = require('../helpers/handlerPassword');

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
  res.status(201).json({ email: result.email, password: result.password });
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
      token,
    },
  });
};

const logoutController = async (req, res) => {
  const { _id } = req.user;
  await logout(_id, { token: null });
  res.status(204).json('No Content');
};

module.exports = {
  registerController,
  loginController,
  logoutController,
};