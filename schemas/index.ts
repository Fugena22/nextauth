import * as z from "zod";

export const LoginSchema = z.object({
  email: z.string().email({ message: "Email không hợp lệ!!" }),
  password: z.string().min(8, { message: "Mật khẩu quá ngắn" }),
});

export const RegisterSchema = z.object({
  email: z.string().email({ message: "Email không hợp lệ!!" }),
  password: z
    .string()
    .min(8, { message: "Mật khẩu phải có ít nhất 8 chữ số!!" }),
  name: z.string().min(2, { message: "Tên phải có ít nhất 2 chữ số!!" }),
});
