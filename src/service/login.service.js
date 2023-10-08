const { User } = require('../models');

const loginService = async (email, password) => {
  const user = await User.findOne({ where: { email } });

  if (!user || user.password !== password) { 
    return ({ status: 'BAD_REQUEST', data: { message: 'Some required fields are missing' } });
  }

  return { status: 'OK', data: user };
};

module.exports = {
  loginService,
};