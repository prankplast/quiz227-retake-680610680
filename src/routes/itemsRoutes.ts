import { Router, type Request, type Response } from "express";
// import Zod validators
import {
  zUserId,
  zItemId,
  zItemPostBody,
  zItemPutBody,
  zItemDeleteBody
} from "../libs/zodValidators.js";
// import types
import type { Item } from "../libs/types.ts";
// import database
import { items } from "../db/db.ts";
//import uuid
import { v4 as uuidv4 } from 'uuid';
import { authenticateToken } from "@src/middlewares/authenMiddleware.ts";

const router = Router();

// GET /api/vXXX/items/:userId 
router.get("/:userId", authenticateToken, (req: Request, res: Response) => {
  try{
    const payload = (req as any).user;

    const userId = req.params.userId as string;
    const userItems = items.filter((item: Item) => item.userId === userId);

    // validate userId
    const parsedUserId = zUserId.safeParse(userId);
    if (!parsedUserId.success) {
      return res.status(400).json({
        success: false,
        message: "Invalid userId",
      });
    }

    if (payload.userId !== userId) {
      return res.status(403).json({
        success: false,
        message: "Forbidden access",
      });
    }

    if (userItems.length === 0) {
      return res.status(404).json({
        success: false,
        message: `items for user ID ${userId} not found`,
      });
    } else {
      return res.status(200).json({
        success: true,
        data: userItems
      });
    }
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Something is wrong, please try again",
      error: err,
    });
  }
});

// POST /api/vXXX/items/:userId, body = {new item data}
// add a new Item for userId
router.post("/:userId", authenticateToken, async (req: Request, res: Response) => {
  try{
    const payload = (req as any).user;
    const userId = req.params.userId as string;
    const newItemData = req.body;

    if (!userId || !newItemData) {
      return res.status(400).json({
        success: false,
        message: "userId and Item data is required",
      });
    }

    // validate
    const parsedUserId = zUserId.safeParse(userId);

    if (!parsedUserId.success) {
      return res.status(400).json({
        success: false,
        message: "Invalid userId",
      });
    }

    if (payload.userId !== userId) {
      return res.status(403).json({
        success: false,
        message: "Forbidden access",
      });
    }

    // create new item
    const newItem: Item = {
      userId: userId,
      itemId: uuidv4(),
      product_name: newItemData.product_name,
      unit_price: newItemData.unit_price,
      quantity: newItemData.quantity,
      category: newItemData.category,
    };

    const parsedItem = zItemPostBody.safeParse(newItem);
    if (!parsedItem.success) {
      return res.status(400).json({
        success: false,
        message: "Invalid item data",
      });
    }

    items.push(newItem);

    return res.status(201).json({
      success: true,
      message: "New Item has been added successfully",
      data: newItem,
    });

  }
  catch (err) {
    return res.status(500).json({
      success: false,
      message: "Something is wrong, please try again",
      error: err,
    });
  }
});

// Delete /api/vXXX/items/:userId


export default router;