import z from "zod";
import { AuthValidator } from ".";
import { axiosInstance } from "../../utility/axios";
import { IProfile } from "./types";

export class AuthApi {
  static async login(
    payload: z.infer<(typeof AuthValidator)["loginChecker"]>
  ): Promise<{
    accessToken: string;
    refreshToken: string;
  }> {
    const res = await axiosInstance.post<
      {
        accessToken: string;
        refreshToken: string;
      },
      {
        accessToken: string;
        refreshToken: string;
      },
      typeof payload
    >("/auth/login", payload);
    localStorage.setItem("accessToken", res.accessToken);
    return res;
  }

  static async register(
    payload: z.infer<(typeof AuthValidator)["registerChecker"]>
  ) {
    await axiosInstance.post<typeof payload>("/auth/register", payload);
  }

  static async getProfile(): Promise<IProfile> {
    return axiosInstance.get("/auth/profile");
  }
}
