import { z } from "zod";

const requiredString = (fieldName: string) =>
  z
    .string({ required_error: `${fieldName} is required` })
    .min(1, { message: `${fieldName} is required` });

export const registerSchema = z.object({
  email: z.string().email(),
  displayName: requiredString("displayName"),
  password: requiredString("password"),
});

export type RegisterSchema = z.infer<typeof registerSchema>;
