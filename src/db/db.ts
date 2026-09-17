import {
  type Item,
  type User,
} from "../libs/types.ts";

// In-memory "database"
export let items: Item[] = [
  {
    userId: "1001",
    itemId : "d10d8f3f-ae0e-4ba9-aa58-3e3f9544732c",
    product_name : "Iphone 17 pro max",
    unit_price: 150,
    quantity: 2,
    category: "Electronics"
  },
  {
    userId: "1001",
    itemId : "5ec10c11-4c4e-40fd-b5c9-e519d0a41dd9",
    product_name : "Mini skirt",
    unit_price: 3000,
    quantity: 2,
    category: "Clothing"
  },
  {
    userId: "1001",
    itemId : "224f5a0c-f6e3-454e-b6b6-d9f7abc6f65d",
    product_name : "Noodle Bowl",
    unit_price: 150,
    quantity: 2,
    category: "Household"
  },
  {
    userId: "1002",
    itemId : "ae31b496-f899-43d9-8008-7b32aefb42d7",
    product_name : "Water bottle",
    unit_price: 200,
    quantity: 1,
    category: "Household"
  }
];
export let users: User[] = [
  {
    username: "user1@abc.com",
    password: "1234",
    userId: "1001",
  },
  {
    username: "user2@abc.com",
    password: "1234",
    userId: "1002",
  },
  {
    username: "user3@abc.com",
    password: "1234",
    userId: "1003",
  },
];

export const DB = {
  items,
  users,
};
