const express = require('express');

const ctrl = require('../../controllers/transactions');

const validateBody = require('../../middlewares/validateBody');

const verifyerToken = require('../../middlewares/verifyerToken');

const { schemas } = require('../../models/transactions');

const ctrlWrapper = require('../../helpers/ctrlWrapper');

const router = express.Router();

router.post(
  '/',
  verifyerToken,
  validateBody(schemas.addSchema),
  ctrlWrapper(ctrl.addTransaction)
);

router.get('/', verifyerToken, ctrlWrapper(ctrl.getAll));

router.get('/categories', verifyerToken, ctrlWrapper(ctrl.getCategories));

// router.get(
//   '/transactions/stats/:year/:month',
//   verifyerToken,
//   validateBody(schemas.addSchema),
//   ctrlWrapper(ctrl.updateContact)
// );

module.exports = router;
