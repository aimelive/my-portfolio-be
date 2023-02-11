import { objectType } from "nexus";

export const Project = objectType({
  name: "Project",
  definition(t) {
    t.id("id");
    t.string("title");
    t.int("stars");
    t.int("rate");
    t.string("tools");
    t.string("platforms");
    t.string("imgUrl");
    t.string("stack");
    t.string("createdAt");
    t.string("updatedAt");
  },
});
