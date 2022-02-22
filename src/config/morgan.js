const morgan = require("morgan");

morgan.token("postData", function getPostData(req) {
  if (req.method === "POST") return JSON.stringify(req.body);
});

const logFormat =
  ":method :url :status :res[content-length] - :response-time ms :postData";

module.exports = { morgan, logFormat };
