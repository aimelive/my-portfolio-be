import Contact from "../database/models/contact";

//Getting all contacts messages
export const getAllContacts = async () => await Contact.findAll();

//Getting a single message
export const getContact = async (_: any, args: { id: string }) => {
  try {
    return await Contact.findByPk(args.id);
  } catch (error) {
    return {
      message: "Contact message not found",
    };
  }
};

//Adding contact message to database
export const addContact = async (
  _: any,
  args: {
    fullName: string;
    email: string;
    message: string;
  }
) => {
  try {
    const newContact = await Contact.create({
      ...args,
    });
    return newContact;
  } catch (error: any) {
    console.log("Something went wrong ", error.toString());
  }
};

//Responding to a contact message
export const respondContact = async (_: any, args: { id: string }) => {
  try {
    const { id } = args;
    const isContactExist = await Contact.findByPk(id);
    if (!isContactExist) throw new Error("Contact does not exist");

    await Contact.update({ responded: "responded" }, { where: { id } });
    return { message: "Contact message responded successfully" };
  } catch (error: any) {
    return {
      message: "failed to respond " + error.toString(),
    };
  }
};

//Deleting a contact message
export const deleteContact = async (_: any, args: { id: string }) => {
  const { id } = args;
  try {
    const contact = await Contact.findByPk(id);
    if (!contact) throw new Error("Contact does not exist");

    await contact.destroy();
    return { message: "Contact deleted successfully" };
  } catch (error: any) {
    return {
      message: "Failed to delete contact message " + error.toString(),
    };
  }
};
