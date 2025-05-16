export type UserType = {
  id: string;
  firstName: string;
  lastName: string;
  username:string;
  email: string;
  status: string;
  roleId: string;
  createdAt: Date;
  updatedAt:Date
};


export interface UserModels {
  users: UserType[] | [];
};

export interface UserModel{
  user:UserType
}
