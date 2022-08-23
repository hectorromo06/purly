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
      for
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
    for
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

export const QUERY_NEEDLES = gql`
query needle {
    _id
    size
  }
`;

export const QUERY_YARN_WEIGHT = gql`
query yarnCharacteristic($type: String) {
    yarnCharacteristic(type: $type)
    _id
    type
    name
  }
`;

export const QUERY_YARN_COLOR = gql`
query yarnCharacteristic($type: String) {
    yarnCharacteristic(type: $type)
    _id
    type
    name
  }
`;

export const QUERY_YARN_FIBER = gql`
query yarnCharacteristic($type: String) {
    yarnCharacteristic(type: $type)
    _id
    type
    name
  }
`;