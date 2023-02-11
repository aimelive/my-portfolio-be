import {
  addBlog,
  deleteBlog,
  editBlog,
  getAllBlogs,
  getBlog,
} from "./blogResolvers";
import {
  addProject,
  deleteProject,
  editProject,
  getAllProjects,
  getProject,
} from "./projectResolver";
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
    projects: getAllProjects,
    project: getProject,
    //Testimonials
    testimonials: getAllTestimonials,
  },
  Mutation: {
    //Blogs
    addBlog,
    editBlog,
    deleteBlog,
    //Projects
    addProject,
    editProject,
    deleteProject,
    //Testimonials
    addTestimony,
    editTestimonial,
    deleteTestimonial,
  },
};

export default Resolvers;
