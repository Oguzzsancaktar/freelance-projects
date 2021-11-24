const jwt = require('jsonwebtoken');
const User = require('../models/user');

const auth = async (req, res, next) => {
  try {
    //  const user = await User.findByCredentials(req.body.email, req.body.password)
    const token = await req.header('Authorization').replace('Bearer ', '');
    const decoded = await jwt.verify(token, 'userAuthToken');

    const user = await User.findOne({
      _id: decoded._id,
      'tokens.token': token,
    });

    if (!user) {
      throw new Error();
    }

    req.token = token
    req.user = user;
    next();
  } catch (error) {
    res.status(401).send({ error: 'Please authenticate !' });
  }
};

module.exports = auth;
