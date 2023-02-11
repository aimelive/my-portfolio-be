import { extendType, mutationType, nonNull, stringArg } from "nexus";
import {
  addTestimony,
  deleteTestimonial,
  editTestimonial,
} from "../../resolvers/testimonyResolvers";

export const TestimonialMutation = extendType({
  type: "Mutation",
  definition(t) {
    t.field("addTestimony", {
      type: "Testimony",
      args: {
        username: nonNull(stringArg()),
        link: nonNull(stringArg()),
        message: nonNull(stringArg()),
        imgUrl: nonNull(stringArg()),
        email: nonNull(stringArg()),
      },
      resolve: addTestimony,
    });
    t.field("editTestimonial", {
      type: "Message",
      args: {
        id: nonNull(stringArg()),
        username: stringArg(),
        link: stringArg(),
        message: stringArg(),
        imgUrl: stringArg(),
      },
      resolve: editTestimonial,
    });
    t.field("deleteTestimonial", {
      type: "Message",
      args: {
        id: nonNull(stringArg()),
      },
      resolve: deleteTestimonial,
    });
  },
});
