const { userService } = require('../service/user.service');

const userController = async (req, res) => {
  const user = req.body;
  const { status, data } = await userService(user);

  return res.status(status).send(data);
};

module.exports = {
  userController,
};