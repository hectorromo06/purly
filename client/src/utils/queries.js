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