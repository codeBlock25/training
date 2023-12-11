import axios, { AxiosError, AxiosResponse } from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:4500/api",
});

axiosInstance.interceptors.request.use(
  (config) => {
    config.headers["Authorization"] = `Bearer ${localStorage.getItem(
      "accessToken"
    )}`;
    config.headers["Content-Type"] = "application/json";
    config.headers["Accept"] = "application/json";
    config.headers["platform"] = "vms";
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

function getData<
  Payload extends { [key: string]: unknown } = { [key: string]: unknown }
>(obj: Payload) {
  if ("data" in obj) {
    return getData(obj["data"] as Payload);
  }
  return obj;
}

axiosInstance.interceptors.response.use(
  (response) => {
    return getData(
      response as unknown as { [key: string]: unknown }
    ) as unknown as AxiosResponse<unknown>;
  },
  (response: AxiosError<NonNullable<never>>) => {
    const err =
      response.response?.data["message"] ??
      response.response?.data["error"] ??
      response.response?.data["errors"] ??
      "Network error!, Please check your internet connection.";
    console.log(`${err}`);
    if (`${err}`.toLowerCase().includes("token")) {
      localStorage.removeItem("accessToken");
      window.location.reload();
    }
    throw err;
  }
);
