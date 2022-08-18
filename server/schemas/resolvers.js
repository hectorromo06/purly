// import models
const { User, Pattern, Comment, Yarn, Needle } = require('../models');
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
      return Pattern.find(input).sort({ createdAt: -1 });
    }
  }
}