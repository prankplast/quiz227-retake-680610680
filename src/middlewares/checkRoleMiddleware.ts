import { type Request, type Response, type NextFunction } from "express";
import { type CustomRequest, type User } from "../libs/types.js";

export const checkRoleMiddleware = (
  req: CustomRequest,
  res: Response,
  next: NextFunction
) => {
  // get payload and token from (custom) request
 
  next();
};