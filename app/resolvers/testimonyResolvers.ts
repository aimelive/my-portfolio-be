import Testimony from "../database/models/testimony";

//Getting all testimonials
export const getAllTestimonials = async () =>
  await Testimony.findAll({ order: [["createdAt", "ASC"]], limit: 3 });

//Adding testimonial to our database
export const addTestimony = async (
  _: any,
  args: {
    username: string;
    message: string;
    link: string;
    imgUrl: string;
    email: string;
  }
) => {
  try {
    const newTestimony = await Testimony.create({
      ...args,
      createdAt: new Date(),
    });
    return newTestimony;
  } catch (error: any) {
    console.log("Something went wrong ", error.toString());
  }
};

//Updating testimonial
export const editTestimonial = async (
  _: any,
  args: {
    id: string;
    username?: string;
    message?: string;
    link?: string;
    imgUrl?: string;
    email?: string;
  }
) => {
  try {
    const { id } = args;
    const isTestimonyExist = await Testimony.findByPk(id);
    if (!isTestimonyExist) throw new Error("Testimony does not exist");

    await Testimony.update(
      { ...args, updatedAt: new Date() },
      { where: { id } }
    );
    return { message: "Testimony updated successfully" };
  } catch (error: any) {
    return {
      message: "failed to update " + error.toString(),
    };
  }
};

//Deleting testimonials
export const deleteTestimonial = async (_: any, args: { id: string }) => {
  const { id } = args;
  try {
    const testimony = await Testimony.findByPk(id);
    if (!testimony) throw new Error("Testimony does not exist");

    await testimony.destroy();
    return { message: "Testomonial deleted successfully" };
  } catch (error: any) {
    return {
      message: "Failed to delete testimony " + error.toString(),
    };
  }
};
