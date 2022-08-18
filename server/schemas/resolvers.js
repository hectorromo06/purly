// import models
const { User, Pattern, Comment, Yarn, Needle } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');