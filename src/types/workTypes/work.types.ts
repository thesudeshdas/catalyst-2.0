import { ICustomDate } from '../global/global.types';

export interface IWork {
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
