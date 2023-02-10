import blogs from "../dataset";

const Resolvers = {
  Query: {
    getAllBlogs: () => blogs,
    getBlog: (_: any, args: any) => {
      console.log(args);

      return blogs.find((blog) => blog.id === args.id);
    },
  },
  Mutation: {
    addBlog: (_: any, args: any) => {
      const newBlog = {
        id: blogs.length + 1,
        title: args.title,
      };
      blogs.push(newBlog);
      return newBlog;
    },
  },
};
export default Resolvers;
