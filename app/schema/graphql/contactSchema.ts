import { objectType } from "nexus";

export const Contact = objectType({
  name: "Contact",
  definition(t) {
    t.id("id");
    t.string("fullName");
    t.string("email");
    t.string("message");
    t.string("responded");
    t.string("createdAt");
    t.string("updatedAt");
  },
});
