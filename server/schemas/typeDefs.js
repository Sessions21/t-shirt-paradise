const { gql } = require('apollo-server-express');

const typeDefs = gql`

  type Comment {
    _id: ID
    username: String
    commentBody: String
    createdAt: String
  }

  type Image {
    _id: ID
    imageLink: String
  }

  type TShirt {
    _id: ID
    title: String
    brand: String
    description: String
    username: String
    createdAt: String
    images: [Image]
    comments: [Comment]
  }

  type User {
    _id: ID
    username: String
    email: String
    password: String
    tshirts: [TShirt]
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    user(username: String!): User
    tshirt(_id: ID!): TShirt
    tshirts: [TShirt]
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addTShirt(title: String!, brand: String, description: String, imageLink: String): TShirt
    addComment(TShirt: ID!, username: String!, commentBody: String): TShirt
    deleteTShirt(_id: ID!): TShirt
  }
`;

module.exports = typeDefs;