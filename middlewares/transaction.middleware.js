const base64 = require("base-64");

const { PaymeError } = require("../enums/transaction.enum");
const environments = require("../config/environments");

const TransactionError = require("../errors/transaction.error");

const PAYME_MERCHANT_KEY = environments.PAYME_MERCHANT_KEY;

exports.paymeCheckToken = (req, res, next) => {
  try {
    const { id } = req.body;
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(" ")[1];
    if (!token) throw new TransactionError(PaymeError.InvalidAuthorization, id);

    const data = base64.decode(token);

    if (!data.includes(PAYME_MERCHANT_KEY)) {
      throw new TransactionError(PaymeError.InvalidAuthorization, id);
    }

    next();
  } catch (err) {
    next(err);
  }
};
