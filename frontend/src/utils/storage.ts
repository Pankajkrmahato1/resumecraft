import type { ResumeData } from "../types/resume";

const STORAGE_KEY = "resumeCraft";

export const saveResume = (data: ResumeData) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
};

export const loadResume = (): ResumeData | null => {
  const data = localStorage.getItem(STORAGE_KEY);

  if (!data) return null;

  return JSON.parse(data);
};
