// import the gql tagged template function
const { gql } = require('apollo-server-express');

// create our typeDefs
const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    patterns: [Pattern]
  },

  type Pattern {
    _id: ID
    project: String
    for: String
    skill: String
    commentArray: [Comment]
    createdAt: String
    yarn: String
    needle: String
  }
`;

// export the typeDefs
module.exports = typeDefs;