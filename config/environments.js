const dotenv = require("dotenv");

dotenv.config();

module.exports = {
  PORT: process.env.PORT || 3000,
  MONGO_URI: process.env.MONGO_URI,
  PAYME_MERCHANT_KEY: process.env.PAYME_MERCHANT_KEY,
};
