export type IBlogPlatform = 'medium' | 'hashnode' | 'devTo' | 'personal';

export interface IBlog {
  _id: string;
  link: string;
  title: string;
  platform: IBlogPlatform;
  owner: string;
}

export interface IGetAllUserBlogsBody {
  userId: string;
}

export interface ICreateBlogBody {
  link: string;
  title: string;
  platform: IBlogPlatform;
  owner: string;
}
