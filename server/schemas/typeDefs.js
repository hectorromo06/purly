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
    comments: [Comment]
    createdAt: String
    fiber: String
    weight: String
    color: String
    needle: Needle
    username: String
    description: String
    instructions: [String]
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
    size: String
  },

  type YarnTypes {
    fibers: [String],
    weights: [String],
    colors: [String]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    user(username: String!): User
    patterns(username: String): [Pattern]
    pattern(_id: ID!): Pattern
    searchPattern(input: Search!): [Pattern]
    yarn: YarnTypes
    needle: [Needle]
  },

  input Search {
    skill: String
    fiber: String
    weight: String
    color: String
    needleId: ID
  },

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addPattern(input: PatternInput!): Pattern
    addComment(patternId: ID!, commentText: String!): Pattern
  },

  input PatternInput {
    name: String
    project: String
    for: String
    skill: String
    fiber: String
    weight: String
    color: String
    needle: String
    instructions: [String]
    description: String
  }
`;

// export the typeDefs
module.exports = typeDefs;