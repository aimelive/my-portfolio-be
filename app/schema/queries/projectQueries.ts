import { extendType, nonNull, stringArg } from "nexus";
import { getAllProjects, getProject } from "../../resolvers/projectResolver";

export const ProjectQuery = extendType({
  type: "Query",
  definition(t) {
    t.list.field("projects", {
      type: "Project",
      resolve: getAllProjects as any,
    });
    t.field("project", {
      type: "Project",
      args: {
        id: nonNull(stringArg()),
      },
      resolve: getProject as any,
    });
  },
});
