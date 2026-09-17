import { type Request, type Response, type NextFunction } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

import { type CustomRequest, type UserPayload } from "../libs/types.js";

export const authenticateToken = (
  req: CustomRequest,
  res: Response,
  next: NextFunction
) => {
 
};

