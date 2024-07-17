import * as z from "zod";

export const SchoolSchema = z.object({
  name: z
    .string()
    .min(1, "Name is required")
    .max(100, "Name must be less than 100 characters"),
  address: z
    .string()
    .min(1, "Address is required")
    .max(200, "Address must be less than 200 characters"),
  city: z
    .string()
    .min(1, "City is required")
    .max(50, "City must be less than 50 characters"),
  state: z
    .string()
    .min(1, "State is required")
    .max(50, "State must be less than 50 characters"),
  contact: z
    .string()
    .regex(/^\d{10}$/, "Contact must be a valid 10-digit phone number"),
  image: z.string().url("Image must be a valid URL"),
  email: z.string().email("Email must be a valid email address"),
});
