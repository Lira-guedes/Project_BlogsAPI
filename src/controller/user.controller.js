const userService = require('../service/user.service');

const userController = async (req, res) => {
  const user = req.body;
  const { status, data } = await userService.postUserService(user);

  return res.status(status).send(data);
};

const findAllUsers = async (req, res) => {
  const { status, data } = await userService.findUserService();
  return res.status(status).json(data);
};

const findByIdUsers = async (req, res) => {
  const { id } = req.params;
  const { status, data } = await userService.findUserByIdService(id);
  return res.status(status).json(data);
};

module.exports = {
  userController,
  findAllUsers,
  findByIdUsers,
};