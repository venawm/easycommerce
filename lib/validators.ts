import { z } from "zod";
import { formatNumberWithDecimal } from "./utils";
import { PAYMENT_METHODS } from "./constants";

const currency = z
  .string()
  .refine(
    (value) => /^\d+(\.\d{2})?$/.test(formatNumberWithDecimal(Number(value))),
    "Price must exactly have two decimal places"
  );

//schema for inserting products
export const insertProductSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters"),
  slug: z.string().min(3, "Slug must be at least 3 characters"),
  category: z.string().min(3, "category must be at least 3 characters"),
  brand: z.string().min(3, "Brand must be at least 3 characters"),
  description: z.string().min(3, "Description must be at least 3 characters"),
  stock: z.coerce.number(),
  images: z.array(z.string()).min(1, "At least 1 image is required"),
  isFeatured: z.boolean(),
  banner: z.string().nullable(),
  price: currency,
});

//schema for updating products
export const updateProductSchema = insertProductSchema.extend({
  id: z.string().min(1, "Id is required"),
});

export const signInFormSchema = z.object({
  email: z.string().email("invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

//registering new user
export const signUpFormSchema = z
  .object({
    name: z.string().min(3, "Name must be at least 3 characters"),
    email: z.string().email("invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z
      .string()
      .min(6, "Confirm Password must be at least 6 characters"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password dont match",
    path: ["confirmPassword"],
  });

//cart shcema
export const cartItemSchema = z.object({
  productId: z.string().min(1, "Product Id must be at least 1 character"),
  name: z.string().min(1, "Name is required"),
  slug: z.string().min(1, "SLug is required"),
  qty: z.number().int().nonnegative("Quantity must be a positive number"),
  image: z.string().min(1, "Image is required"),
  price: currency,
});

export const insertCartSchema = z.object({
  items: z.array(cartItemSchema),
  itemsPrice: currency,
  totalPrice: currency,
  shippingPrice: currency,
  taxPrice: currency,
  sessionCartId: z.string().min(1, "Session Cart Id is required"),
  userId: z.string().optional().nullable(),
});

//schema for shipping address
export const shippingAddressSchema = z.object({
  fullName: z.string().min(3, "Full Name must be at least 3 characters"),
  streetAddress: z.string().min(3, "Address must be at least 3 characters"),
  city: z.string().min(3, "City must be at least 3 characters"),
  country: z.string().min(3, "Country must be at least 3 characters"),
  postalCode: z.string().min(3, "Postal Code must be at least 3 characters"),
  lat: z.number().optional(),
  lng: z.number().optional(),
});

//schema for payment method
export const paymentMethodSchema = z
  .object({
    type: z.string().min(1, "Payment method is required"),
  })
  .refine((data) => PAYMENT_METHODS.includes(data.type), {
    path: ["type"],
    message: "Invalid Payment Method",
  });

//schema for inserting order
export const insertOrderSchema = z.object({
  userId: z.string().min(1, "user is required"),
  itemsPrice: currency,
  shippingPrice: currency,
  taxPrice: currency,
  totalPrice: currency,
  paymentMethod: z.string().refine((data) => PAYMENT_METHODS.includes(data), {
    message: "Invalid Payment Method",
  }),
  shippingAddress: shippingAddressSchema,
});

//schema for inserting order item
export const insertOrderItemSchema = z.object({
  productId: z.string(),
  slug: z.string(),
  image: z.string(),
  name: z.string(),
  price: currency,
  qty: z.number(),
});

export const paymentResultSchema = z.object({
  id: z.string(),
  status: z.string(),
  email_address: z.string(),
  pricePaid: z.string(),
});

//schema for updating the user profile
export const updateProfileSchema = z.object({
  name: z.string().min(3, "name must be atleast 3 characters"),
  email: z.string().min(3, "email must be atleast 3 characters"),
});

//schema to update users
export const updateUserSchema = updateProfileSchema.extend({
  id: z.string().min(1, "Id is required"),
  name: z.string().min(3, "Name must be at least 3 characters"),
  role: z.string().min(1, "Role is required"),
});

//schema to insert reviews
export const insertReviewSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters"),
  description: z.string().min(3, "description must be at least 3 characters"),
  productId: z.string().min(1, "product is required"),
  userId: z.string().min(1, "user is required"),
  rating: z.coerce
    .number()
    .int()
    .min(1, "Rating must be atleast 1")
    .max(5, "Rating must be atmost 5"),
});
