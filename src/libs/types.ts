interface Item {
  userId: string;
  itemId : string;
  product_name : string;
  unit_price: number;
  quantity: number;
  category: 'Electronics'|'Clothing'|'Household'|'Others';
}
export type { Item };

interface User {
  username: string;
  password: string;
  userId?: string | null;
  tokens?: string[];
}
export type { User };

// JWT Payload interface
interface UserPayload {
  username: string;
  userId?: string;
}
export type { UserPayload };

// Custom HTTP Request interface
import { type Request } from "express";
interface CustomRequest extends Request {
  user?: UserPayload; // Define the user property
  token?: string; // Define the token property
}
export type { CustomRequest };
