import {
  addBlog,
  deleteBlog,
  editBlog,
  getAllBlogs,
  getBlog,
} from "./blogResolvers";
import {
  addTestimony,
  getAllTestimonials,
  editTestimonial,
  deleteTestimonial,
} from "./testimonyResolvers";

const Resolvers = {
  Query: {
    //Blogs
    getAllBlogs,
    getBlog,
    //Projects
    //Testimonials
    testimonials: getAllTestimonials,
  },
  Mutation: {
    //Blogs
    addBlog,
    editBlog,
    deleteBlog,
    //Projects
    //Testimonials
    addTestimony,
    editTestimonial,
    deleteTestimonial,
  },
};

export default Resolvers;
