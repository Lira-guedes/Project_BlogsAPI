const jwt = require('jsonwebtoken');
const { User } = require('../models');

const { JWT_SECRET } = process.env;

const postUserService = async (userData) => {
  const { displayName, email, password, image } = userData;
  const user = await User.findOne({ where: { email } });
  const newUser = await User.create({ displayName, email, password, image });

  if (user) return { status: 409, data: { message: 'User already registered' } };
  if (!newUser) return { status: 500, data: { message: 'User not created' } };

  const token = jwt.sign({ id: newUser.id }, JWT_SECRET, { expiresIn: '7d' });

  return { status: 201, data: { token } }; 
};

const findUserService = async () => {
  const users = await User.findAll({ attributes: ['id', 'displayName', 'email', 'image'] });
  return { status: 200, data: users };
};

const findUserByIdService = async (id) => {
  const user = await User.findByPk(id, { attributes: ['id', 'displayName', 'email', 'image'] });
  if (!user) return { status: 404, data: { message: 'User does not exist' } };
  return { status: 200, data: user };
};

module.exports = {
  postUserService,
  findUserService,
  findUserByIdService,
};