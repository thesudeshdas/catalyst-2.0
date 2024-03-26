import { IBlog } from '../blogTypes/blog.types';
import { IPowst } from '../powstTypes/powst.types';
import { IWork } from '../workTypes/work.types';

export interface IUserSocials {
  name: string;
  link: string;
}

export interface IUser {
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  userId: string;
  headline: string;
  _id: string;
  profilePic: string;
  location: string;
  socials: IUserSocials[];
  powsts: { powst: Partial<IPowst> }[];
  blogs: { blog: Partial<IBlog> }[];
  bio: string;
  description: string;
  specialisation: string[];
}

export interface IUpdateUserDetailsBody {
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  userId: string;
  headline: string;
  _id: string;
  location: string;
  socials: IUserSocials[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  profilePic: any;
  powsts: { powst: string }[];
  blogs: { blog: string }[];
  bio: string;
  description: string;
  specialisation: string[];
}

export interface IGetUserDetailsBody {
  userId: string;
}

export interface IUserPowst {
  powst: IPowst;
  starred: boolean;
}

export interface IUserBlog {
  blog: IBlog;
  starred: boolean;
}

export interface IUserWork {
  work: IWork;
  starred: boolean;
}
