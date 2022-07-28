import { send, json } from "micro";
import { add, getAll, getSuggestion, remove } from "./db";

const handler = async (req: any, res: any) => {
	if (req.url === "/get-restaurants") {
		send(res, 200, getAll());
	} else if (req.url === "/get-suggested-restaurant") {
		send(res, 201, JSON.stringify(getSuggestion()));
	} else if (req.url === "/add-restaurant") {
		const body = (await json(req)) as any;
		send(res, 201, add(body.restaurant));
	} else if (req.url === "/remove-restaurant") {
		const body = (await json(req)) as any;
		send(res, 201, remove(body.restaurant));
	} else {
		send(res, 404, JSON.stringify("not-found"));
	}
};

export default handler;
