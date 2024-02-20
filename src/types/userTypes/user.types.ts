export interface IUser {
  firstName: string;
  lastName: string;
  email: string;
  userId: string;
  headline: string;
  _id: string;
  profilePic: string;
  location: string;
}

export interface IUpdateUserDetailsBody {
  firstName: string;
  lastName: string;
  userId: string;
  headline: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  profilePic: any;
  location: string;
}

export interface IGetUserDetailsBody {
  userId: string;
}
