const { User } = require('../models');

const resolvers = {
  Query: {
    user: async (parent, args) => {
      return await User.findOne({ username: args.username });
    }
  },
  Mutation: {
    addUser: async (parent, args) => {
      return await User.create(args);
    }
  }
}

module.exports = resolvers;