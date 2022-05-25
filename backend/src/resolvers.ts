import { Endpoints } from "./types";
import * as DB from "./db";

const resolvers: Endpoints = {
  "/documents": {
    GET: () => {
      return [200, DB.getAll()];
    },
    POST: ({ data: { restaurants } }) => {
      return [200, DB.getAll()];
    },
  },
};

export default resolvers;
