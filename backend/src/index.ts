import { RequestHandler } from "micro";
import handle from "./handler";
import router from "./router";

export default ((req, res) => handle(req, res)(router)) as RequestHandler;
