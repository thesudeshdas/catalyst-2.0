export interface IWork {
  company: string;
  companyLogo: string;
  companyWebsite: string;
  startDate: Date;
  endDate: Date | 'Present';
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
  startDate: Date;
  endDate: Date | 'Present';
  designation: string;
  workType: 'Full time' | 'Part time' | 'Internship' | 'Freelance';
  location: string;
  techStack: { name: string; version: string }[];
  keywords: { text: string }[];
  description?: string;
}
