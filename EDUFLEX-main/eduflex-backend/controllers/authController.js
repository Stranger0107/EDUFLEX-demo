const User = require('../models/User');
const { generateToken } = require('../utils/generateToken');


const loginUser = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if(user && await user.matchPassword(password)){
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      token: generateToken(user._id),
    });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
}

module.exports = { loginUser };
