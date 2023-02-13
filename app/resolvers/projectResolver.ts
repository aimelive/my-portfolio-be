import Project from "../database/models/project";

//Getting all projects
export const getAllProjects = async () => await Project.findAll();

//Get one project details
export const getProject = async (_: any, args: any) => {
  try {
    return await Project.findByPk(args.id);
  } catch (error) {
    return {
      message: "Project not found",
    };
  }
};

//Adding project to our database
export const addProject = async (
  _: any,
  args: {
    title: string;
    stars: number;
    rate: number;
    imgUrl: string;
    tools: string;
    platforms: string;
    stack: string;
  }
) => {
  try {
    const isProjectExist = await Project.findOne({
      where: { title: args.title },
    });
    if (isProjectExist) throw new Error("Project exists");

    const project = await Project.create({
      ...args,
      createdAt: new Date(),
    });
    return project;
  } catch (error: any) {
    console.log("Something went wrong ", error.toString());
  }
};

//Updating project
export const editProject = async (
  _: any,
  args: {
    id: string;
    title?: string;
    stars?: number;
    rate?: number;
    imgUrl?: string;
    tools?: string;
    platforms?: string;
    stack?: string;
  }
) => {
  try {
    const { id } = args;
    const isProjectExist = await Project.findByPk(id);
    if (!isProjectExist) throw new Error("Project does not exist");

    await Project.update({ ...args, updatedAt: new Date() }, { where: { id } });
    return { message: "Project updated successfully" };
  } catch (error: any) {
    return {
      message: "failed to update " + error.toString(),
    };
  }
};

//Deleting project
export const deleteProject = async (_: any, args: { id: string }) => {
  const { id } = args;
  try {
    const project = await Project.findByPk(id);
    if (!project) throw new Error("Project does not exist");

    await project.destroy();
    return { message: "Project deleted successfully" };
  } catch (error: any) {
    return {
      message: "Failed to delete project " + error.toString(),
    };
  }
};
