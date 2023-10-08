const jwt = require('jsonwebtoken');
const loginService = require('../service/login.service');

const { JWT_SECRET } = process.env;

const postLogin = async (req, res) => {
  const { email, password } = req.body;
  const data = await loginService(email, password);
  if (!data) return res.status(400).json({ message: 'Invalid fields' });

  const { id } = email;
  const token = jwt.sign(id, JWT_SECRET, { expiresIn: '7d' });
  return res.status(200).json({ token });
};

module.exports = {
  postLogin,
};