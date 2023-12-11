export interface Detail {
  value: string;
  label: string;
  name: string;
}

export interface Dependency {
  deleted: boolean;
  name: string;
  description: string;
  dependencies: unknown[];
  createdOn: string;
  updatedOn: string;
}

export interface Permission {
  deleted: boolean;
  name: string;
  description: string;
  dependencies: Dependency[];
  createdOn: string;
  updatedOn: string;
  id?: string;
}

export interface Role {
  deleted: boolean;
  name: string;
  category: string;
  accounts: string[];
  permissions: Permission[];
  createdOn: string;
  updatedOn: string;
  schemas: unknown[];
  id?: string;
}

export interface Device {
  deleted: boolean;
  token: string;
  refreshToken: string;
  expiryDate: string;
  devices: string[];
  createdOn: string;
  updatedOn: string;
  id?: string;
}

export interface Profile {
  deleted: boolean;
  refId: string;
  email: string;
  password: string;
  level: string;
  passwordValidated: boolean;
  isEmailValidated: boolean;
  status: string;
  profile: {
    firstName: string;
    lastName: string;
    otherNames: string;
    gender: string;
    phoneNumber: string;
    details: Detail[];
    deleted: boolean;
  };
  role: Role;
  createdOn: string;
  updatedOn: string;
  createdAccounts: unknown[];
  permissionAddons: unknown[];
  permissionExceptions: unknown[];
  tokens: Device[];
  id?: string;
}

export interface IProfile {
  profile: Profile;
}
