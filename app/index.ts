import { ApolloServer } from "apollo-server-express";
import Schema from "./schema/Schema";
import Resolvers from "./resolvers/Resolvers";
import express from "express";
import { ApolloServerPluginDrainHttpServer } from "apollo-server-core";
import http from "http";
import dbConnection from "./database/config/db";
import BlogModel from "./database/models/blog";

async function startApolloServer(schema: any, resolvers: any) {
  const app = express();
  const httpServer = http.createServer(app);
  const server = new ApolloServer({
    typeDefs: schema,
    resolvers,

    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  }) as any;
  await server.start(); //start the GraphQL server.
  server.applyMiddleware({ app });
  await new Promise<void>(
    (resolve) => httpServer.listen({ port: 4000 }, resolve) //run the server on port 4000
  );
  console.log(
    `Server ready at http://localhost:4000${server.graphqlPath} 🔥🔥`
  );

  //Connecting to database
  await dbConnection
    .sync()
    .then(() => {
      console.log("Database connected successfully! 😂");
    })
    .catch((error) => {
      console.log("Connecting to database failed! 😟", error);
    });
}

startApolloServer(Schema, Resolvers);
