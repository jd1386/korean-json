const users = require('./users');

module.exports = {
  firstGroup: () => Promise.all([users()])
};
