const { StatusCodes } = require("http-status-codes");
const User = require("../models/User");
const bcrypt = require('bcryptjs')

const register = async (req, res) => {
  const { name, email, password } = req.body;
    console.log(name , email , password);
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password , salt)
    console.log(hashedPassword);
    const tempUser = {name , email , password : hashedPassword}
    console.log(tempUser);
  const user = await User.create({ ...tempUser });
  res.status(StatusCodes.CREATED).json({ user });
};

const login = async (req, res) => {
  res.send("Login User");
};

module.exports = { register, login };
