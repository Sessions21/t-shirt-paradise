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
    imageLink: String
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
    user: User
    tshirt(_id: ID!): TShirt
    userTShirts(username: String): [TShirt]
    tshirts: [TShirt]
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addTShirt(title: String!, brand: String, description: String, imageLink: String): TShirt
    addComment(TShirt: ID!, username: String!, commentBody: String): TShirt
    editTShirt(_id: ID!, title: String, description: String, brand: String, imageLink: String): TShirt
    deleteTShirt(_id: ID!): User
  }
`;

module.exports = typeDefs;