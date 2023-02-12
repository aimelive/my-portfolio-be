import { extendType, intArg, nonNull, stringArg } from "nexus";
import {
  addProject,
  deleteProject,
  editProject,
} from "../../resolvers/projectResolver";

export const ProjectMutation = extendType({
  type: "Mutation",
  definition(t) {
    t.field("addProject", {
      type: "Project",
      args: {
        title: nonNull(stringArg()),
        stars: nonNull(intArg()),
        rate: nonNull(intArg()),
        imgUrl: nonNull(stringArg()),
        tools: nonNull(stringArg()),
        platforms: nonNull(stringArg()),
        stack: nonNull(stringArg()),
      },
      resolve: addProject as any,
    });
    t.field("editProject", {
      type: "Message",
      args: {
        id: nonNull(stringArg()),
        title: stringArg(),
        stars: intArg(),
        rate: intArg(),
        imgUrl: stringArg(),
        tools: stringArg(),
        platforms: stringArg(),
        stack: stringArg(),
      },
      resolve: editProject as any,
    });
    t.field("deleteProject", {
      type: "Message",
      args: {
        id: nonNull(stringArg()),
      },
      resolve: deleteProject,
    });
  },
});
