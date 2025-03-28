import { z } from "zod";
import { formatNumberWithDecimal } from "./utils";

const currency = z
  .string()
  .refine(
    (value) => /^\d+(\.\d{2})?$/.test(formatNumberWithDecimal(Number(value))),
    "Price must have exactly two decimal places"
  );

// Schema for inserting product

export const insertProductSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters"),
  slug: z.string().min(3, "Name must be at least 3 characters"),
  category: z.string().min(3, "Name must be at least 3 characters"),
  brand: z.string().min(3, "Name must be at least 3 characters"),
  description: z.string().min(3, "Name must be at least 3 characters"),
  stock: z.coerce.number(),
  images: z.array(z.string()).min(1, "Product must have atleast one image"),
  isFeatured: z.boolean(),
  banner: z.string().nullable(),
  price: currency,
});

// Schema for Sign In

export const signInFormSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

// Schema for signup
export const signUpFormSchema = z
  .object({
    name: z.string().min(3, "Name must be atleast 3 characters"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string().min(6, "Confirm password"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password don't match",
    path: ["confirmPassword"],
  });

// Cart Schema

export const cartItemSchema = z.object({
  productId: z.string().min(1, "Product is required"),
  name: z.string().min(1, "Name is required"),
  slug: z.string().min(1, "Slug is required"),
  qty: z
    .number()
    .int()
    .nonnegative("Quantity must be a positive number")
    .min(1, "Product is required"),
  image: z.string().min(1, "Image is required"),
  price: currency,
});

export const insertCartSchema = z.object({
  items: z.array(cartItemSchema),
  itemsPrice: currency,
  totalPrice: currency,
  shippingPrice: currency,
  taxPrice: currency,
  sessionCartId: z.string().min(1, "Session cart id is required"),
  userId: z.string().optional().nullable(),
});
