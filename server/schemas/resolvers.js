const { User, TShirt, Comment } = require('../models');

const resolvers = {
  Query: {
    user: async (parent, args) => {
      return await User.findOne({ username: args.username });
    },
    tshirt: async (parent, args) => {
      return await TShirt.findOne({ createdBy: args.username })
        .populate('comments');
    },
    tshirts: async () => {
      return await TShirt.find()
    }
  },
  Mutation: {
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });
      
      // need to add all the auth processes
      
      return user;
    },
    //sign up
    addUser: async (parent, args) => {
      return await User.create(args);
    },
    addTShirt: async (parent, args) => {
      return await TShirt.create(args);
    },
    addComment: async (parent, args) => {
      const comment = await Comment.create(args);
      return await TShirt.findOneAndUpdate(
        { _id: args.TShirt },
        { $push: { comments: comment } },
        { new: true, runValidators: true }
      )
        .populate('comments')
    },
    deleteTShirt: async (parent, { _id }) => {
      return await TShirt.deleteOne({ _id })
    }
  }
}

module.exports = resolvers;