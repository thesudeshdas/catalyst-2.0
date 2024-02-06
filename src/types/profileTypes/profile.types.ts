export interface IEditProfileBasicForm {
  firstName: string;
  lastName: string;
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
  dribbble: string;
  behance: string;
  youtube: string;
}
