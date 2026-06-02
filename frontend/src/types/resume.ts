export interface PersonalInfo {
  fullName: string;
  city: string;
  country: string;
  pinCode: string;
  email: string;
  phone: string;
  linkedIn: string;
  github: string;
  website: string;
}

export interface Experience {
  id: string;

  jobTitle: string;

  employer: string;

  city: string;

  country: string;

  startDate: string;

  endDate: string;

  currentlyWorking: boolean;

  description: string;
}
export interface Education {
  id: string;

  institution: string;

  degree: string;

  city: string;

  country: string;

  marks: string;

  accolades: string;

  startDate: string;

  endDate: string;
}

export interface ResumeData {
  personalInfo: PersonalInfo;

  summary: string;

  experiences: Experience[];

  education: Education[];

  skills: string[];
}
