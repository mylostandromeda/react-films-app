const jwt = require('jsonwebtoken');
const {JWT_SECRET} = require('../../config');

module.exports.authMiddleware = async (req, res, next) => {
  const header = req.headers['authorization'];

  if (!header) {
    return res.status(401).json({
      message: `No Authorization http header found!`,
    });
  }

  const token = header.split(' ')[1];

  if (!token) {
    return res.status(401).json({message: `No JWT token found!`});
  }

  req.user = jwt.verify(token, JWT_SECRET);
  next();
};
