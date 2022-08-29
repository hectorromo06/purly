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
        madeFor
        skill
        createdAt
        description      
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
      madeFor
      skill
      createdAt
      description      
    }
  }
}
`;

export const QUERY_PATTERNS = gql`
  query pattern($username: String) {
    patterns(username: $username) {
      _id
      name
      project
      madeFor
      skill
      comments {
        _id
        commentText
        username
        createdAt
      }
      createdAt
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

export const QUERY_PATTERN = gql`
  query pattern($_id: ID!) {
    pattern(_id: $_id) {
      _id
      name
      project
      madeFor
      skill
      comments {
        _id
        commentText
        username
        createdAt
      }
      createdAt
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

export const QUERY_SEARCH = gql`
  query searchPattern($input: Search) {
    searchPattern(input: $input) {
      _id
      name
      username
      createdAt
      description
    }
  }
`;

export const QUERY_NEEDLES = gql`
  {
    needle {
      _id
      size
  }
}
`;

export const QUERY_YARN = gql`
  query yarnCharacteristic($type: String) {
    yarnCharacteristic(type: $type) {
      _id
      type
      name
    }
  }
`;