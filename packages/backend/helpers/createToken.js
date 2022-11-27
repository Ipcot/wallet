const jwt = require("jsonwebtoken");

const tokenCreater = (payload, secretKey) => {
  const token = jwt.sign(payload, secretKey, { expiresIn: "24h" });
  return token;
};

module.exports = tokenCreater;
