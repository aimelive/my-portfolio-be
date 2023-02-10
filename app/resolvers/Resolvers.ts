import BlogModel from "../database/models/blog";
import { slugify } from "../utils/helpers";

const Resolvers = {
  Query: {
    getAllBlogs: async () => await BlogModel.findAll(),
    getBlog: async (_: any, args: any) => {
      try {
        return await BlogModel.findByPk(args.id);
      } catch (error) {
        return {
          message: "Blog not found",
        };
      }
    },
  },
  Mutation: {
    addBlog: async (
      _: any,
      args: {
        title: string;
        body: string;
        intro: string;
        imgUrl: string;
        tags: string;
      }
    ) => {
      try {
        const slug: string = slugify(args.title);
        const isBlogExist = await BlogModel.findOne({ where: { slug } });
        if (isBlogExist) throw new Error("Blog exists");

        const newBlog = await BlogModel.create({
          ...args,
          slug: slug,
        });
        return newBlog;
      } catch (error: any) {
        console.log("Something went wrong ", error.toString());
      }
    },
    editBlog: async (
      _: any,
      args: {
        id: string;
        title?: string;
        body?: string;
        intro?: string;
        imgUrl?: string;
        tags?: string;
      }
    ) => {
      try {
        const { id, title } = args;
        const isBlogExist = await BlogModel.findByPk(id);
        if (!isBlogExist) throw new Error("Blog does not exist");

        let slug: string | undefined;
        if (title) {
          slug = slugify(title);
        }
        await BlogModel.update({ ...args, slug }, { where: { id } });
        return { message: "Blog updated successfully" };
      } catch (error: any) {
        return {
          message: "failed to update " + error.toString(),
        };
      }
    },
    deleteBlog: async (_: any, args: { id: string }) => {
      const { id } = args;
      try {
        const blog = await BlogModel.findByPk(id);
        if (!blog) throw new Error("Blog does not exist");

        await blog.destroy();
        return { message: "Blog deleted successfully" };
      } catch (error: any) {
        return {
          message: "Failed to delete blog " + error.toString(),
        };
      }
    },
  },
};
export default Resolvers;
