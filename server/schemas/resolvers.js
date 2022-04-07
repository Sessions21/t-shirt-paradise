const { AuthenticationError } = require("apollo-server-express");
const { User, TShirt, Comment } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    user: async (parent, args, context) => {
      if (context.user) {
        const username = context.user.username;
        return await User.findOne({ username: username })
          .populate('tshirts');
      }
      throw new AuthenticationError("Not logged in");
    },
    tshirt: async (parent, { _id }) => {
      return await TShirt.findOne({ _id }).populate("comments");
    },
    userTShirts: async (parent, args, context) => {
      const username = context.user?.username || args.username;
      return await TShirt.find({ username })
        .populate('comments');
    },
    tshirts: async () => {
      console.log("Called get all tshirts");
      return await TShirt.find()
        .populate('comments');
    },
  },
  Mutation: {
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });
      if (!user) throw new AuthenticationError("Incorrect credentials");

      const correctPw = await user.isCorrectPassword(password);
      if (!correctPw) throw new AuthenticationError("Incorrect credentials");

      const token = signToken(user);
      console.log("User: " + user._id + " has signed in");
      return { token, user };
    },

    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },

    addTShirt: async (parent, args, context) => {
      if (context.user) {
        const tshirt = await TShirt.create({
          ...args,
          username: context.user.username,
        });

        await User.findOneAndUpdate(
          { username: context.user.username },
          { $push: { tshirts: tshirt } }
        )

        return tshirt;
      }
      throw new AuthenticationError("Not logged in");
    },

    addComment: async (parent, args, context) => {
      if (context.user) {
        const comment = await Comment.create(args);
        return await TShirt.findOneAndUpdate(
          { _id: args._id },
          { $push: { comments: comment } },
          { new: true, runValidators: true }
        ).populate("comments");
      }
      throw new AuthenticationError("Not logged in");
    },

    editTShirt: async (parent, args, context) => {
      if (context.user) {
        return await TShirt.findOneAndUpdate(
          { _id: args._id },
          args,
          { new: true, runValidators: true }
        )
          .populate('comments')
      }
      throw new AuthenticationError("Not logged in");
    },

    deleteTShirt: async (parent, { _id }, context) => {
      if (context.user) {
        console.log(context.user);
        const username = context.user.username;
        console.log('delete');
        await TShirt.deleteOne({ _id: _id });
        return await User.findOneAndUpdate(
          { username: username },
          { $pull: { tshirts: _id } },
          { new: true, runValidators: true }
        )
          .populate('tshirts');
      }
      throw new AuthenticationError("Not logged in");
    },
  },
};

module.exports = resolvers;
