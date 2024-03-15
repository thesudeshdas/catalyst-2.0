import { ICustomDate } from '../global/global.types';

export interface IWork {
  _id: string;
  company: string;
  companyLogo: string;
  companyWebsite: string;
  startDate: ICustomDate;
  endDate: ICustomDate;
  designation: string;
  workType: 'Full time' | 'Part time' | 'Internship' | 'Freelance';
  location: string;
  techStack: { name: string; version: string }[];
  keywords: string[];
  description?: string;
}

export interface IEditWorkForm {
  company: string;
  companyLogo: string;
  companyWebsite: string;
  startDate: ICustomDate;
  endDate: ICustomDate;
  designation: string;
  workType: 'Full time' | 'Part time' | 'Internship' | 'Freelance';
  location: string;
  techStack: { name: string; version: string }[];
  keywords: { text: string }[];
  description?: string;
}

export interface ICreateWorkBody {
  company: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  companyLogo: any;
  companyWebsite: string;
  startDate: ICustomDate;
  endDate: ICustomDate;
  designation: string;
  workType: 'Full time' | 'Part time' | 'Internship' | 'Freelance';
  location: string;
  techStack: { name: string; version: string }[];
  keywords: string[];
  description: string;
  owner: string;
}

export interface IGetAllUserWorksBody {
  userId: string;
}
