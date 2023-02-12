import { extendType, nonNull, stringArg } from "nexus";
import { getAllBlogs, getBlog } from "../../resolvers/blogResolvers";

export const BlogQuery = extendType({
  type: "Query",
  definition(t) {
    t.list.field("getAllBlogs", {
      type: "Blog",
      resolve: getAllBlogs as any,
    });
    t.field("getBlog", {
      type: "Blog",
      args: {
        id: nonNull(stringArg()),
      },
      resolve: getBlog as any,
    });
  },
});
