const transactionService = require("../services/transaction.service");

const { PaymeMethod } = require("../enums/transaction.enum");

class TransactionController {
  constructor(service) {
    this.service = service;
  }

  async payme(req, res, next) {
    try {
      const { method, params, id } = req.body;

      switch (method) {
        case PaymeMethod.CheckPerformTransaction: {
          await this.service.checkPerformTransaction(params, id);

          return res.json({ result: { allow: true } });
        }
        case PaymeMethod.CheckTransaction: {
          const result = await this.service.checkTransaction(params, id);

          return res.json({ result, id });
        }
        case PaymeMethod.CreateTransaction: {
          const result = await this.service.createTransaction(params, id);

          return res.json({ result, id });
        }
        case PaymeMethod.PerformTransaction: {
          const result = await this.service.performTransaction(params, id);

          return res.json({ result, id });
        }
        case PaymeMethod.CancelTransaction: {
          const result = await this.service.cancelTransaction(params, id);

          return res.json({ result, id });
        }
      }
    } catch (err) {
      next(err);
    }
  }
}

module.exports = new TransactionController(transactionService);
