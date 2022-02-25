const morgan = require('morgan');

morgan.token('requestData', (req) => JSON.stringify(req.body));

const logFormat = ':method :url :status :res[content-length] - :response-time ms :requestData';

module.exports = { morgan, logFormat };
