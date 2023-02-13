import Blog from "../database/models/blog";
import { slugify } from "../utils/helpers";

//Getting all blogs
export const getAllBlogs = async () => {
  const blogs = await Blog.findAll();
  return blogs;
};

export const getBlog = async (_: any, args: any) => {
  try {
    console.log(_); //Parent works in relation ships manner
    return await Blog.findByPk(args.id);
  } catch (error) {
    return {
      message: "Blog not found",
    };
  }
};

//Adding blogs to our database
export const addBlog = async (
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
    const isBlogExist = await Blog.findOne({ where: { slug } });
    if (isBlogExist) throw new Error("Blog exists");

    const newBlog = await Blog.create({
      ...args,
      slug: slug,
      createdAt: new Date(),
    });
    return newBlog;
  } catch (error: any) {
    console.log("Something went wrong ", error.toString());
  }
};

//Updating blogs
export const editBlog = async (
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
    const isBlogExist = await Blog.findByPk(id);
    if (!isBlogExist) throw new Error("Blog does not exist");

    let slug: string | undefined;
    if (title) {
      slug = slugify(title);
    }
    await Blog.update(
      { ...args, slug, updatedAt: new Date() },
      { where: { id } }
    );
    return { message: "Blog updated successfully" };
  } catch (error: any) {
    return {
      message: "failed to update " + error.toString(),
    };
  }
};

//Deleting blogs
export const deleteBlog = async (_: any, args: { id: string }) => {
  const { id } = args;
  try {
    const blog = await Blog.findByPk(id);
    if (!blog) throw new Error("Blog does not exist");

    await blog.destroy();
    return { message: "Blog deleted successfully" };
  } catch (error: any) {
    return {
      message: "Failed to delete blog " + error.toString(),
    };
  }
};
