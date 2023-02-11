import { makeSchema } from "nexus";
import path from "path";

import * as Types from "./graphql";

const Schema = makeSchema({
  types: Types,
  outputs: {
    schema: path.join(__dirname, "schema.graphql"),
    typegen: path.join(__dirname, "generated/nexus.ts"),
  },
});

export default Schema;
