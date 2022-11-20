const express = require('express');

const {
  registerController,
  loginController,
  logoutController,
} = require('../../controllers/authControllers');

const validationData = require('../../middlewares/userValidation');
const ctrlWrapper = require('../../helpers/ctrlWrapper');

const { registSchemaJoi, loginSchemaJoi } = require('../../schemas/user');
const verifyerToken = require('../../middlewares/verifyerToken');

const router = express.Router();

router.post(
  '/register',
  validationData(registSchemaJoi),
  ctrlWrapper(registerController)
);

router.post(
  '/login',
  validationData(loginSchemaJoi),
  ctrlWrapper(loginController)
);

router.get('/logout', verifyerToken, ctrlWrapper(logoutController));

// router.get('/current', async (req, res, next) => {
//   res.json({ message: 'template message' });
// });

// router.post('/refresh', async (req, res, next) => {
//   res.json({ message: 'template message' });
// });

module.exports = router;
