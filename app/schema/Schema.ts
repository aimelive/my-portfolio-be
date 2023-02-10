import { gql } from "apollo-server-express"; 

const Schema = gql`
  type Blog {
    id: ID!
    title: String
  }
  type Query {
    getAllBlogs: [Blog]
    getBlog(id: Int): Blog
  }
  type Mutation {
    addBlog(title: String): Blog
  }
`;
export default Schema; 
