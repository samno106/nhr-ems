export type UserType = {
  id: string;
  email: string;
  fullName: string;
  status: "Active" | "Pending";
  roleId: string;
  profile: string;
  createdAt: Date;
  updatedAt: Date;
};

export interface UserModels {
  users: UserType[] | [];
}

export interface UserModel {
  user: UserType;
}
