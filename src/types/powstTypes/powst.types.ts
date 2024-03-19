export interface IGetAllUserPowstsBody {
  userId: string;
}

export interface IPowst {
  _id: string;
  title: string;
  live?: string;
  source?: string;
  description: string;
  techStack: { name: string; version: string }[];
  image: string;
  imageAlt?: string;
  keywords?: string[];
  owner: {
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
    username?: string;
    profilePic?: string;
  };
}
