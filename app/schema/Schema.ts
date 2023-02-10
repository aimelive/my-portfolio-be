import { gql } from "apollo-server-express";

const Schema = gql`
  type Blog {
    id: ID!
    title: String
    intro: String
    body: String
    slug: String
    imgUrl: String
    createdAt: String
    updatedAt: String
    tags: String
  }
  type Message {
    message: String
  }
  type Query {
    getAllBlogs: [Blog]
    getBlog(id: String!): Blog
  }
  type Mutation {
    addBlog(
      title: String
      intro: String
      body: String
      imgUrl: String
      tags: String
    ): Blog
    editBlog(
      id: String!
      title: String
      intro: String
      body: String
      imgUrl: String
      tags: String
    ): Message
    deleteBlog(
      id: String!
    ): Message
  }
`;
export default Schema;
