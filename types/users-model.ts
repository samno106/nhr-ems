export type UserModel = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  status: string;
  roleId: string;
  createdAt: Date;
};

export type UserModels = {
  users: UserModel[] | [];
};
