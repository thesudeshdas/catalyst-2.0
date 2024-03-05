import { IBlogPlatform } from '../blogTypes/blog.types';

export interface IEditProfileBasicForm {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  location: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  profilePic: any;
  headline: string;
}

export interface IEditProfileSocialForm {
  github: string;
  gitlab: string;
  twitter: string;
  linkedIn: string;
  medium: string;
  hashnode: string;
  devTo: string;
  instagram: string;
  figma: string;
  dribbble: string;
  behance: string;
  youtube: string;
  wellfound: string;
  freelancer: string;
  upwork: string;
  fiverr: string;
  producthunt: string;
  portfolio: string;
}

export interface IEditProfileAboutForm {
  bio: string;
  // description: string; // ? comes from the mdx editor
  // specialisation: string[]; // ? comes from the useState array of strings
}

export interface IEditBlogForm {
  title: string;
  link: string;
  platform: IBlogPlatform;
  // date: string;
}
