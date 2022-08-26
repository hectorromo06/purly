import {gql} from '@apollo/client';

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation addUser($email: String!, $password: String!) {
    addUser(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_COMMENT = gql`
mutation addComment($patternId: ID!, $commentText: String!) {
    addComment(patternId: $patternId, commentText: $commentText) {
      comments {
        commentText
        username
    }
    _id
    name
    project
    for
    skill
    username
    description
    createdAt
  }
}
`;

export const ADD_PATTERN = gql`
mutation addPattern($input: PatternInput!) {
    addPattern(input: $input){
    _id
    name
    project
    for
    skill
    fiber {
      _id
      type
      name
    }
    weight {
      _id
      type
      name
    }
    color {
      _id
      type
      name
    }
    needle {
      _id
      size
    }
    username
    description
    instructions
  }
}
`;

