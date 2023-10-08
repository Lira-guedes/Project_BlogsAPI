const { User } = require('../models');

const loginService = async (email, password) => {
  const user = await User.findOne({ where: { email } });

  if (!user || user.password !== password) { 
    return ({ status: 400, data: { message: 'Invalid fields' } });
  }

  return { status: 200, data: user };
};

module.exports = {
  loginService,
};