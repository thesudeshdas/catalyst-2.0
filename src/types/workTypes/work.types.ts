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

// IDEA @thesudeshdas => Create a page giving credits to icon libraries, packages, maintainers, etc
