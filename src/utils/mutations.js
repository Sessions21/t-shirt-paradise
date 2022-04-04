import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
                _id
                username
            }
        }
    }
`;

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

export const ADD_TSHIRT = gql`
  mutation addTShirt ($title: String!, $brand: String, $description: String, $imageLink: String) {
    addTShirt(title: $title, brand: $brand, description: $description, imageLink: $imageLink) {
      _id
      title
      brand
      description
      username
      createdAt
      images {
        imageLink
      }
    }
  }
`;

export const ADD_REACTION = gql`
  mutation addReaction($tshirtId: ID!, $reactionBody: String!) {
    addReaction(tshirtId: $tshirtId, reactionBody: $reactionBody) {
      _id
      reactionCount
      reactions {
        _id
        reactionBody
        createdAt
        username
      }
    }
  }
`;