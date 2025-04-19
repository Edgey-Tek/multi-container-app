const dotenv = require('dotenv');
dotenv.config();

const apiConfig = {
  apiKey: process.env.API_KEY,
  apiSecret: process.env.API_SECRET,
  apiBaseUrl: process.env.API_BASE_URL
};

module.exports = apiConfig;
