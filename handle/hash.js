const bcrypt = require("bcrypt");

exports.hash = (password) => {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(10), null);
};
