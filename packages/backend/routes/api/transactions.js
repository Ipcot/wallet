const express = require('express');

const ctrl = require('../../controllers/transactions');

const validateBody = require('../../middlewares/validateBody');

const { schemas } = require('../../models/transactions');

const ctrlWrapper = require('../../helpers/ctrlWrapper');

const router = express.Router();

router.post(
  '/',
  validateBody(schemas.addSchema),
  ctrlWrapper(ctrl.addTransaction)
);

router.get('/', ctrlWrapper(ctrl.getAll));

router.get('/categories', ctrlWrapper(ctrl.getCategories));

// router.get(
//   '/transactions/stats/:year/:month',
//   authenticate,
//   validateBody(schemas.addSchema),
//   ctrlWrapper(ctrl.updateContact)
// );

module.exports = router;
