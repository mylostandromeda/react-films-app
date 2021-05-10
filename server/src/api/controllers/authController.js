const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const {JWT_SECRET} = require('../../config');
const {User} = require('../../models/userModel');
const saltRounds = 12;

module.exports.login = async (req, res) => {
  const {email, password} = req.body;
  const user = await User.findOne({email});

  if (!user) {
    return res.status(404).json({
      message: `No user with email ${email} found!`,
    });
  }

  if (!(await bcrypt.compare(password, user.password))) {
    return res.status(400).json({message: 'Wrong password!'});
  }

  const token = jwt.sign({email: user.email, _id: user._id}, JWT_SECRET);
  res.json({user, token});
};

module.exports.registration = async (req, res) => {
  const {email, password, confirmPassword, firstName, lastName} = req.body;
  const isMailExists = await User.findOne({email});

  if(isMailExists) {
    return res.status(400).json({message: 'This email is already used'});
  }

  if(password !== confirmPassword)  {
    return res.status(400).json({message: 'Password dont match'});
  }

  const user = new User({
    firstName,
    lastName,
    email,
    password: await bcrypt.hash(password, saltRounds)
  });

  await user.save();

  const token = jwt.sign({email: user.email, _id: user._id}, JWT_SECRET);
  res.json({user, token});
};
