const bcrypt = require("bcryptjs");

const hashingPassword = async (password) => {
  const hashPass = await bcrypt.hash(password, 10);
  return hashPass;
};

const comparePassword = async (password, userPassword) => {
  const compare = bcrypt.compare(password, userPassword);
  return compare;
};
module.exports = {
  hashingPassword,
  comparePassword,
};
