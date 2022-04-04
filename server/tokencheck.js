const { signToken } = require('./utils/auth');

console.log(
  signToken({ username: 'tkcannon', email: 'tkcannon.dev@gmail.com', _id: '123' })
);
