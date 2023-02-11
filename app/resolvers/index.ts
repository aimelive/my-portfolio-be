import {
  addBlog,
  deleteBlog,
  editBlog,
  getAllBlogs,
  getBlog,
} from "./blogResolvers";

const Resolvers = {
  Query: {
    //Blogs
    getAllBlogs,
    getBlog,
    //Projects
    //Testimonials
  },
  Mutation: {
    //Blogs
    addBlog,
    editBlog,
    deleteBlog,
    //Projects
    //Testimonials
  },
};

export default Resolvers;
