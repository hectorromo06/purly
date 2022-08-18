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
    name: String
    project: String
    for: String
    skill: String
    commentArray: [Comment]
    createdAt: String
    yarn: String
    needle: String
  },

  type Comment {
    _id: ID
    commentText: String
    username: String
    createdAt: String
  },

  type Yarn {
    _id: ID
    fiber: String
    weight: String
    color: String
  },

  type Needle {
    _id: ID
    needle: String
  },

  type Query {
    me: User
    users: [User]
    user(username: String!): User
    patterns(username: String): [Pattern]
    pattern(_id: ID!): Pattern
    searchPattern(input: Search!): [Pattern]
    yarn(_id: ID): [Yarn]
    needle(_id: ID): [Needle]
  },

  input Search {
    skill: String
    yarn_id: ID
    needle_id: ID
  }
`;

// export the typeDefs
module.exports = typeDefs;