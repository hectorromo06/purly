// import models
const { User, Pattern, Yarn, Needle } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id })
          .select('-__v -password');
        
        return userData;
      }

      throw new AuthenticationError('Not logged in');
    },

    user: async (parent, { username }) => {
      return User.findOne({ username })
        .select('-__v -password')
        .populate('patterns');
    },

    // Get all patterns or patterns made by a single user
    patterns: async (parent, { username }) => {
      // set ups params if there is a username or not
      const params = username ? { username } : {};
      return Pattern.find(params).sort({ createdAt: -1 });
    },

    // Get all patterns with all information in input
    searchPattern: async (parent, { input }) => {
      let params = {};
      if (input.skill) params['skill'] = input.skill;
      if (input.needleId) params['needle'] = input.needleId;
      if (input.yarnAttributes) {
        const yarn = Yarn.findOne(input.yarnAttributes);
        params['yarn'] = yarn._id;
      }
      return Pattern.find(params).sort({ createdAt: -1 });
    },

    // Get Pattern by Id
    pattern: async (parent, { _id }) => {
      return Pattern.findOne({ _id });
    },

    // Get All Yarn
    yarn: async () => {
      return Yarn.find();
    },

    // Get All Needle
    needle: async () => {
      return Needle.find();
    } 
  },

  Mutation: {
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }
    
      const correctPw = await user.isCorrectPassword(password);
    
      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }
      
      const token = signToken(user);
      return { token, user };
    },

    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },

    addPattern: async (parent, { input }, context) => {
      if (context.user) {
        const pattern = await Pattern.create({ ...input, username: context.user.username });

        await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { patterns: pattern._id } },
          { new: true, runValidators: true }
        )

        return pattern;
      }
      throw new AuthenticationError('You need to be logged in!');
    },

    addComment: async (parent, { patternId, commentText }, context) => {
      if (context.user) {
        const updatedPattern = await Pattern.findOneAndUpdate(
          { _id: patternId },
          { $push: { comments: { commentText, username: context.user.username } } },
          { new: true, runValidators: true }
        )

        return updatedPattern;
      }
      throw new AuthenticationError('You need to be logged in!');
    }
  }
}

module.exports = resolvers;
