const express = require("express");

const transactionController = require("../controllers/transaction.controller");

const { paymeCheckToken } = require("../middlewares/transaction.middleware");

const router = express.Router();

router.post("/payments/payme", paymeCheckToken, transactionController.payme);

module.exports = router;
