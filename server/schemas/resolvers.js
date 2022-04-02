const { AuthenticationError } = require('apollo-server-express');
const { User, TShirt, Comment } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    user: async (parent, args) => {
      return await User.findOne({ username: args.username });
    },
    tshirt: async (parent, { _id }) => {
      return await TShirt.findOne({ _id })
        .populate('comments');
    },
    tshirts: async () => {
      console.log('Called get all tshirts');
      return await TShirt.find()
    }
  },
  Mutation: {
    login: async (parent, { email, password }) => {

      const user = await User.findOne({ email });
      if (!user) throw new AuthenticationError('Incorrect credentials');

      const correctPw = await user.isCorrectPassword(password);
      if (!correctPw) throw new AuthenticationError('Incorrect credentials');

      const token = signToken(user);
      return { token, user };
    },

    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },

    addTShirt: async (parent, args, context) => {
      if (context.user) {
        return await TShirt.create(args);
      }

      throw new AuthenticationError('Not logged in');
    },

    addComment: async (parent, args, context) => {
      if (context.user) {
        const comment = await Comment.create(args);
        return await TShirt.findOneAndUpdate(
          { _id: args.TShirt },
          { $push: { comments: comment } },
          { new: true, runValidators: true }
        )
          .populate('comments')
      }
    },

    deleteTShirt: async (parent, { _id }, context) => {
      if (context.user) {
        return await TShirt.deleteOne({ _id });
      }
    }
  }
}

module.exports = resolvers;