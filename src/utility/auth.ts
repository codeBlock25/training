import { redirect } from "react-router-dom";

export function authorizedOnly() {
  const token = localStorage.getItem("accessToken");
  if (!token) {
    throw redirect("/auth/login");
  }
  return {};
}

export function unAuthorizedOnly() {
  const token = localStorage.getItem("accessToken");
  if (token) {
    throw redirect("/dashboard");
  }
  return {};
}
