import { IncomingMessage, ServerResponse } from "http";
import { RequestHandler, send } from "micro";
import * as Errors from "./errors";

export default (req: IncomingMessage, res: ServerResponse) => async (
  handle: RequestHandler
) => {
  try {
    const [code, data] = await handle(req, res);
    send(res, code, data);
  } catch (error) {
    Errors.handle(error, req, res);
  }
};
