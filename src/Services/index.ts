import { AuthApi } from ".";

export * from "./Auth";

export class Api {
  static get auth() {
    return AuthApi;
  }
}
