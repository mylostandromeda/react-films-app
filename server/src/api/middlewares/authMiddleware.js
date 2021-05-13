const jwt = require('jsonwebtoken');
const {JWT_SECRET} = require('../../config');

module.exports.authMiddleware = async (req, res, next) => {
  const header = req.headers['authorization'];

  if (!header) {
    // you can use 'http-status-codes' package (or similar) to optimise working with status codes & messages
    return res.status(401).json({
      message: `No Authorization http header found!`,
    });
  }

  // you should check if token starts with Bearer as well
  const token = header.split(' ')[1];

  if (!token) {
    return res.status(401).json({message: `No JWT token found!`});
  }

  // token itself might be invalid, so there might be no user
  // add a callback function were you can ensure there is a user and it is valid
  req.user = jwt.verify(token, JWT_SECRET);
  next();
};
