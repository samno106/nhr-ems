export type UserCardType = {
  id: string;
  fullName: string;
  email: string;
  status: string;
  profile: string;
};

export interface UserCardModel {
  user: UserCardType;
}
