/// <reference types="vite/client" />

import { ReactComponentElement } from "react";

declare module "*.svg" {
  export const content: ReactComponentElement;
}

declare module "*.css" {}

declare module NodeJS.Process {
  export namespace NodeJS {
    export interface ProcessEnv {
      REACT_PUBLIC_API_URL?: string;
    }
  }
}
