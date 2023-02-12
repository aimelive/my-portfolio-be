import { extendType, nonNull, stringArg } from "nexus";
import {
  addContact,
  deleteContact,
  respondContact,
} from "../../resolvers/contactResolvers";

export const ContactMutation = extendType({
  type: "Mutation",
  definition(t) {
    t.field("addContact", {
      type: "Contact",
      args: {
        fullName: nonNull(stringArg()),
        email: nonNull(stringArg()),
        message: nonNull(stringArg()),
      },
      resolve: addContact as any,
    });
    t.field("respondContact", {
      type: "Message",
      args: {
        id: nonNull(stringArg()),
      },
      resolve: respondContact,
    });
    t.field("deleteContact", {
      type: "Message",
      args: {
        id: nonNull(stringArg()),
      },
      resolve: deleteContact,
    });
  },
});
