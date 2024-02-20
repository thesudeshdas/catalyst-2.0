export interface IUser {
  firstName: string;
  lastName: string;
  email: string;
  userId: string;
  headline: string;
  _id: string;
  profilePic: string;
}

export interface IUpdateUserDetailsBody {
  userId: string;
  firstName: string;
  lastName: string;
  headline: string;
}

export interface IGetUserDetailsBody {
  userId: string;
}
