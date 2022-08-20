import { gql } from '@apollo/client';

export const QUERY_USER = gql`
query user($username: String!) {
  user(username: $username) {
    _id
    username
    email
    patterns {
      _id
      name
      username
      project
      for
      skill
      createdAt
      fiber
      weight
      color
      description
      instructions
      needle {
        _id
        size 
      }
      comments {
        _id
        commentText
        username
        createdAt
      }
      
    }
  }
}
`;

export const QUERY_ME = gql`
 {
  me {
    _id
    username
    email
    patterns {
      _id
      name
      username
      project
      for
      skill
      createdAt
      fiber
      weight
      color
      description
      instructions
      needle {
        _id
        size 
      }
      comments {
        _id
        commentText
        username
        createdAt
      }
      
    }
  }
}
`;

export const QUERY_PATTERNS = gql`
query user($username: String!) {
    user(username: $username) {
    patterns {
      _id
      name
      username
      project
      for
      skill
      createdAt
      fiber
      weight
      color
      description
      instructions
      needle {
        _id
        size 
      }
      
    }
  }
}
`;

export const QUERY_NEEDLES = gql`
query needle {
    _id
    size
  }
`;