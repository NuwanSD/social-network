import { z } from "zod";

const requiredString = (fieldName: string) =>
  z
    .string({ required_error: `${fieldName} is required` })
    .min(1, { message: `${fieldName} is required` });

export const editProfileSchema = z.object({
  displayName: requiredString("Display Name"),
  bio: z.string().optional(),
});

export type EditProfileSchema = z.infer<typeof editProfileSchema>;
