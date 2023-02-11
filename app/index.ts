import { ApolloServer } from "apollo-server-express";
import Schema from "./schema";
import Resolvers from "./resolvers";
import express from "express";
import { ApolloServerPluginDrainHttpServer } from "apollo-server-core";
import http from "http";
import dbConnection from "./database/config/db";
import * as dotenv from "dotenv";

dotenv.config();

const port = process.env.PORT || 5000;

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
    (resolve) => httpServer.listen({ port: port }, resolve) //run the server on port 4000
  );

  console.log(
    `Server running on port ${port} 🔥🔥\npath: http://localhost:${port}${server.graphqlPath}`
  );

  //Connecting to database
  await dbConnection
    .sync()
    .then(() => {
      console.log("Database connected successfully! 😂");
    })
    .catch((error: any) => {
      console.log("Connecting to database failed! 😟", error.toString());
    });
}

startApolloServer(Schema, Resolvers);
