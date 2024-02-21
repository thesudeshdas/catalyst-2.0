import { IPowst } from '../createPowstTypes/createPowst.types';

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
  powsts: { powst: Partial<IPowst> }[];
}

export interface IUpdateUserDetailsBody {
  firstName: string;
  lastName: string;
  email: string;
  userId: string;
  headline: string;
  _id: string;
  location: string;
  socials: IUserSocials;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  profilePic: any;
  powsts: { powst: string }[];
}

export interface IGetUserDetailsBody {
  userId: string;
}

export interface IUserPowst {
  powst: IPowst;
  starred: boolean;
}
