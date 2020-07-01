const bcrypt = require('bcryptjs');

const generateHash = (password) => {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
}
// module.exports = generateHash;

// bcrypt.genSalt(10, function(err, salt) {
//   bcrypt.hash("B4c0/\/", salt, function(err, hash) {
//       // Store hash in your password DB.
//   });
// });

// bcrypt.hash('bacon', 8, function(err, password) {
// });



const validatePassword = (password) => {
  return bcrypt.compareSync(password);
}
module.exports = {generateHash, validatePassword};