export type UserCardType = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  status: string;
};

export interface UserCardModel{
    user:UserCardType
}