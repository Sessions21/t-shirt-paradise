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
      imageLink
    }
  }
`;

export const EDIT_TSHIRT = gql`
  mutation editTShirt ($_id: ID!, $title: String, $description: String, $brand: String, $imageLink: String) {
    editTShirt(_id: $_id, title: $title, description: $description, brand: $brand, imageLink: $imageLink) {
      _id
      title
      brand
      description
      username
      createdAt
      imageLink
    }
  }
`;

export const DELETE_TSHIRT = gql`
  mutation deleteTShirt ($_id: ID!) {
    deleteTShirt (_id: $_id) {
      _id
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