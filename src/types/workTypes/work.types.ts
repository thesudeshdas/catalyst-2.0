export interface IWork {
  company: string;
  companyLogo: string;
  companyWebsite: string;
  startDate: Date;
  endDate: Date | 'Present';
  designation: string;
  workType: 'Full time' | 'Part time' | 'Internship' | 'Freelance';
  location: string;
  keywords: string[];
  techStack: { name: string; version: string }[];
  description?: string;
}

export interface IEditWorkForm extends IWork {}
