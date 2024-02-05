"use server";

import * as z from "zod";
import { RegisterSchema } from "../schemas";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validatedFields = RegisterSchema.safeParse(values);

  if (!validatedFields) {
    return { error: "Có gì đó sai sai!!" };
  }

  return { success: "Đăng nhập thành công" };
};
