import { RoleType } from "./role-type.model";

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: RoleType;
  createdAt: Date;
  refreshToken?: string;
}