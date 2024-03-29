const jwt = require('jsonwebtoken');
const { loginService } = require('../service/login.service');

const { JWT_SECRET } = process.env;

const postLogin = async (req, res) => {
  const { email, password } = req.body;
  const { data, status } = await loginService(email, password);
  if (status === 400) return res.status(status).json(data);
  const { id } = data;
  const token = jwt.sign({ id }, JWT_SECRET, { expiresIn: '7d' });
  return res.status(200).json({ token });
};

module.exports = {
  postLogin,
};