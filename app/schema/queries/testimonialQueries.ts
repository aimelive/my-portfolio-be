import { extendType } from "nexus";
import { getAllTestimonials } from "../../resolvers/testimonyResolvers";

export const TestimonialQuery = extendType({
  type: "Query",
  definition(t) {
    t.list.field("testimonials", {
      type: "Testimony",
      resolve: getAllTestimonials,
    });
  },
});
