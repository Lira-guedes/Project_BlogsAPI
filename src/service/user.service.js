const jwt = require('jsonwebtoken');
const { User } = require('../models');

const { JWT_SECRET } = process.env;

const userService = async (userData) => {
  const { displayName, email, password, image } = userData;
  const user = await User.findOne({ where: { email } });
  const newUser = await User.create({ displayName, email, password, image });

  if (user) return { status: 409, data: { message: 'User already registered' } };
  if (!newUser) return { status: 400, data: { message: 'Internal error' } };

  const token = jwt.sign(newUser, JWT_SECRET, { expiresIn: '7d' });

  return { status: 201, data: { token } }; 
};

module.exports = {
  userService,
};