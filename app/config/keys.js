const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    mongoProdURI: process.env.MONGO_URI,
};
