const bcrypt = require('bcryptjs');

const generateHash = (password) => {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
}

const validatePassword = (inputPassword, dbPassword) => {
  return bcrypt.compareSync(inputPassword, dbPassword);
}
module.exports = {generateHash, validatePassword};