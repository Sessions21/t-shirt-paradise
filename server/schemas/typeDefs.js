const { gql } = require('apollo-server-express');

const typeDefs = gql`

  type Comment {
    _id: ID
    writtenBy: String
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
    createdBy: String
    createdAt: String
    images: [Image]
    comments: [Comment]
  }

  type User {
    _id: ID
    username: String
    email: String
    password: String
  }

  type Query {
    user(username: String!): User
    tshirt(_id: ID!): TShirt
    tshirts: [TShirt]
  }

  type Mutation {
    login(email: String!, password: String!): User
    addUser(username: String!, email: String!, password: String!): User
    addTShirt(title: String!, brand: String, description: String, createdBy: String, createdAt: String, imageLink: String!): TShirt
    addComment(TShirt: ID!, writtenBy: String!, commentBody: String, createdAt: String): TShirt
    deleteTShirt(_id: ID!): TShirt
  }
`;

module.exports = typeDefs;