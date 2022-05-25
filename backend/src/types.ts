import { IncomingHttpHeaders } from "http";

export type Method =
  | "CONNECT"
  | "DELETE"
  | "GET"
  | "HEAD"
  | "OPTIONS"
  | "PATCH"
  | "POST"
  | "PUT"
  | "TRACE";

export interface Endpoints {
  [name: string]: {
    [method in Method]?: EndpointHandler;
  };
}

export type EndpointHandlerReturn = [code: number, data: any];

export type EndpointHandlerArgs = {
  headers: IncomingHttpHeaders;
  data: object;
};

export type EndpointHandler = (
  args: EndpointHandlerArgs
) => Promise<EndpointHandlerReturn> | EndpointHandlerReturn;
