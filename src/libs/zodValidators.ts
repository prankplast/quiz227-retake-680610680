import { z } from "zod";

//////  Items Validators //////

export const zUserId = z.string().length(4, { message: "User Id must contain 4 characters" });
export const zItemId = z.string(); 
const zProduct_Name  = z.string();
const zUnit_Price  = z.number();
const zQuantity  = z.number();
const zCategory = z.enum(['Electronics','Clothing','Household','Others'], {message: "Category must be either Electronics,Clothing,Household or Others"});

export const zItemPostBody = z.object({
  userId: zUserId,
  itemId: zItemId,
  product_name: zProduct_Name,
  unit_price: zUnit_Price,
  quantity: zQuantity,
  category: zCategory
});

export const zItemPutBody = z.object({
  userId: zUserId,
  itemId: zItemId,
  product_name: zProduct_Name.nullish(),
  unit_price: zUnit_Price.nullish(), 
  quantity: zQuantity.nullish(),
  category: zCategory.nullish()
});

export const zItemDeleteBody = z.object({
  userId: zUserId,
  itemId: zItemId,
});