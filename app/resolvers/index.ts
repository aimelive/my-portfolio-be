import {
  addBlog,
  deleteBlog,
  editBlog,
  getAllBlogs,
  getBlog,
  getBlogBySlug,
} from "./blogResolvers";
import {
  addContact,
  deleteContact,
  getAllContacts,
  getContact,
  respondContact,
} from "./contactResolvers";
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
    getBlogBySlug,
    //Projects
    projects: getAllProjects,
    project: getProject,
    //Testimonials
    testimonials: getAllTestimonials,
    //contacts message
    messages: getAllContacts,
    message: getContact,
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
    //contacts message
    addContact,
    respondContact,
    deleteContact,
  },
};

export default Resolvers;
