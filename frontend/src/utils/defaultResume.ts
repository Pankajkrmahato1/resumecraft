import type { ResumeData } from "../types/resume";

export const defaultResume: ResumeData = {
  personalInfo: {
    fullName: "",
    city: "",
    country: "",
    pinCode: "",
    email: "",
    phone: "",
    linkedIn: "",
    github: "",
    website: "",
  },

  summary: "",

  experiences: [],
  education: [],

  skills: [],
};
