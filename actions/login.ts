"use server";

import * as z from "zod";
import { LoginSchema } from "../schemas";

export const login = async (values: z.infer<typeof LoginSchema>) => {
  const validatedFields = LoginSchema.safeParse(values);

  if (!validatedFields) {
    return { error: "Có gì đó sai sai!!" };
  }

  return { success: "Đăng nhập thành công" };
};
