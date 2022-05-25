import { json, RequestHandler } from "micro";
import handle from "./handler";
import resolvers from "./resolvers";
import { Method } from "./types";

const router: RequestHandler = async (req, res) => {
  const url = req.url ?? "/";
  const method = req.method as Method;

  const resolver = resolvers[url]?.[method];
  if (!resolver) return [404, "Resource not found"];

  return resolver({
    headers: req.headers,
    data: await json(req),
  });
};

export default router;
