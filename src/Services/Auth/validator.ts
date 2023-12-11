import z from "zod";

export class AuthValidator {
  static get loginChecker() {
    return z.object({
      email: z.string().email(),
      password: z
        .string()
        .min(8)
        .regex(/[A-Z]/gm, {
          message: "Password must contain at least one uppercase letter",
        })
        .regex(/[a-z]/gm, {
          message: "Password must contain at least one lowercase letter",
        })
        .regex(/[0-9]/gm, {
          message: "Password must contain at least one number",
        })
        .regex(/^[a-zA-Z]/gm, {
          message: "Password must start with alphabets",
        }),
      rememberMe: z.boolean(),
    });
  }
  static get registerChecker() {
    return z.object({
      email: z.string().email(),
      password: z.string(),
    });
  }
}
