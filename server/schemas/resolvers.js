const { User, TShirt } = require('../models');

const resolvers = {
  Query: {
    user: async (parent, args) => {
      return await User.findOne({ username: args.username });
    },
    tshirt: async (parent, args) => {
      return await TShirt.findOne({ createdBy: args.username });
    },
    tshirts: async () => {
      return await TShirt.find();
    }
  },
  Mutation: {
    addUser: async (parent, args) => {
      return await User.create(args);
    }
  }
}

module.exports = resolvers;