// Import User model
const User = require('../models/User');

// @desc    Get all users
// @route   GET /api/v1/users
// @access  Public
exports.getUsers = async (req, res, next) => {
  try {
    const users = await User.find();

    return res.status(200).json({
      sucess: true,
      cont: users.length,
      data: users
    });
  } catch (err) {
    return res.status(500).json({
      sucess: false,
      error: 'Server Error'
    });
  }
}

// @desc    Get user
// @route   GET /api/v1/users/:id
// @access  Public
exports.getUserById = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user || user == null) {
      return res.status(404).json({
        sucess: false,
        error: 'User not found.'
      });
    } else {
      return res.status(200).json({
        sucess: true,
        data: user
      });
    }
  } catch (err) {
    return res.status(500).json({
      sucess: false,
      error: 'Server Error'
    });
  }
}

// @desc    Add user
// @route   POST /api/v1/users
// @access  Public
exports.addUser = async (req, res, next) => {  
  try {
    const { username, email, password } = req.body;
    const user = await User.create(req.body);

    return res.status(201).json({
      sucess: true,
      data: user,
      message: "User created"
    });
  } catch (err) {
    if (err.name === 'ValidationError') {
      const messages = Object.values(err.errors).map(value => value.message);
      
      return res.status(400).json({
        sucess: false,
        error: messages
      });
    } else {
      return res.status(500).json({
        sucess: false,
        error: 'Server Error'
      });
    }
  }
}

// @desc    Update user
// @route   PUT /api/v1/users/:id
// @access  Public
exports.updateUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user || user == null) {
      return res.status(404).json({
        sucess: false,
        error: 'User not found.'
      });
    } else {
      const { username, email, password } = req.body;
      
      await user.updateOne(req.body);
      const updatedUser = await User.findById(req.params.id);
      
      console.log(`Updated User: ${user}`);
      
      return res.status(200).json({
        sucess: true,
        data: updatedUser,
        message: 'User updated'
      });
    }
  } catch (err) {
    return res.status(500).json({
      sucess: false,
      error: 'Server Error'
    });
  }
}

// @desc    Delete user
// @route   DELETE /api/v1/users/:id
// @access  Public
exports.deleteUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user || user == null) {
      return res.status(404).json({
        sucess: false,
        error: 'User not found.'
      });
    } else {
      await user.remove();
      
      return res.status(200).json({
        sucess: true,
        data: [],
        message: 'User deleted'
      });
    }
    
  } catch (err) {
    return res.status(500).json({
      sucess: false,
      error: 'Server Error'
    });
  }
}