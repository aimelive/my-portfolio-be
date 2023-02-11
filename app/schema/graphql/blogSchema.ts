import { objectType } from "nexus";

export const Blog = objectType({
  name: "Blog",
  definition(t) {
    t.id("id");
    t.string("title");
    t.string("intro");
    t.string("body");
    t.string("slug");
    t.string("imgUrl");
    t.string("createdAt");
    t.string("updatedAt");
    t.string("tags");
  },
});
