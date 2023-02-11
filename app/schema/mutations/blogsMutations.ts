import { extendType, nonNull, stringArg } from "nexus";
import { addBlog, deleteBlog, editBlog } from "../../resolvers/blogResolvers";

export const BlogMutation = extendType({
  type: "Mutation",
  definition(t) {
    t.field("addBlog", {
      type: "Blog",
      args: {
        title: nonNull(stringArg()),
        intro: nonNull(stringArg()),
        body: nonNull(stringArg()),
        imgUrl: nonNull(stringArg()),
        tags: nonNull(stringArg()),
      },
      resolve: addBlog,
    });
    t.field("editBlog", {
      type: "Message",
      args: {
        id: nonNull(stringArg()),
        title: stringArg(),
        intro: stringArg(),
        body: stringArg(),
        imgUrl: stringArg(),
        tags: stringArg(),
      },
      resolve: editBlog,
    });
    t.field("deleteBlog", {
      type: "Message",
      args: {
        id: nonNull(stringArg()),
      },
      resolve: deleteBlog,
    });
  },
});
