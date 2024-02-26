import { IPowst } from '../createPowstTypes/createPowst.types';

export interface IUserSocials {
  name: string;
  link: string;
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
  socials: IUserSocials[];
  powsts: { powst: Partial<IPowst> }[];
  bio: string;
}

export interface IUpdateUserDetailsBody {
  firstName: string;
  lastName: string;
  email: string;
  userId: string;
  headline: string;
  _id: string;
  location: string;
  socials: IUserSocials[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  profilePic: any;
  powsts: { powst: string }[];
  bio: string;
}

export interface IGetUserDetailsBody {
  userId: string;
}

export interface IUserPowst {
  powst: IPowst;
  starred: boolean;
}
