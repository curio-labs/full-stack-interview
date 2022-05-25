import { IncomingMessage, ServerResponse } from "http";
import { send } from "micro";

export class HTTPError extends Error {
  constructor(public code: number, public message: string) {
    super(message);
  }
}

export const handle = (
  error: Error,
  req: IncomingMessage,
  res: ServerResponse
) => {
  /* Expected HTTP error: */
  if (error instanceof HTTPError) {
    send(res, error.code, error.message);
  }

  /* Unexpected error: */
  handleUnexpected(req, error);
  send(res, 500, "Internal Server Error");
};

export const handleUnexpected = (_req: IncomingMessage, error: Error) => {
  console.error({
    message: "Unexpected error occurred",
    error,
  });
};
