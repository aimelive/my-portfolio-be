import { extendType, nonNull, stringArg } from "nexus";
import { getAllContacts, getContact } from "../../resolvers/contactResolvers";

export const ContactQuery = extendType({
  type: "Query",
  definition(t) {
    t.list.field("messages", {
      type: "Contact",
      resolve: getAllContacts,
    });
    t.field("message", {
      type: "Contact",
      args: {
        id: nonNull(stringArg()),
      },
      resolve: getContact,
    });
  },
});
