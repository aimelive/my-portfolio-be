import { objectType } from "nexus";

export const Testimony = objectType({
  name: "Testimony",
  definition(t) {
    t.id("id");
    t.string("username");
    t.string("message");
    t.string("link");
    t.string("imgUrl");
    t.string("createdAt");
    t.string("updatedAt");
  },
});
