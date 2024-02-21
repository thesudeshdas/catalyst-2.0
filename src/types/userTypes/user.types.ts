export interface IUserSocials {
  github: string;
  gitlab: string;
  twitter: string;
  linkedIn: string;
  medium: string;
  hashnode: string;
  devTo: string;
  instagram: string;
  dribbble: string;
  behance: string;
  youtube: string;
}

export interface IUser {
  firstName: string;
  lastName: string;
  email: string;
  userId: string;
  headline: string;
  _id: string;
  profilePic: string;
  location: string;
  socials: IUserSocials;
}

export interface IUpdateUserDetailsBody extends IUser {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  profilePic: any;
}

export interface IGetUserDetailsBody {
  userId: string;
}
