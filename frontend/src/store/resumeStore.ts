import { create } from "zustand";
import type { ResumeData, Experience, Education } from "../types/resume";

import { defaultResume } from "../utils/defaultResume";
import { saveResume, loadResume } from "../utils/storage";

interface ResumeStore {
  resume: ResumeData;

  updatePersonalInfo: (field: string, value: string) => void;

  updateSummary: (value: string) => void;

  addExperience: () => void;

  updateExperience: (id: string, field: string, value: any) => void;

  addEducation: () => void;

  updateEducation: (id: string, field: string, value: any) => void;

  addSkill: (skill: string) => void;

  removeSkill: (skill: string) => void;
}

const storedData = loadResume();

export const useResumeStore = create<ResumeStore>((set) => ({
  resume: {
    ...defaultResume,
    ...storedData,
    personalInfo: {
      ...defaultResume.personalInfo,
      ...(storedData?.personalInfo || {}),
    },
    experiences: storedData?.experiences || [],
    education: storedData?.education || [],
    skills: storedData?.skills || [],
    summary: storedData?.summary || "",
  },

  updatePersonalInfo: (field, value) =>
    set((state) => {
      const updated = {
        ...state.resume,
        personalInfo: {
          ...state.resume.personalInfo,
          [field]: value,
        },
      };

      saveResume(updated);
      return { resume: updated };
    }),

  updateSummary: (value) =>
    set((state) => {
      const updated = {
        ...state.resume,
        summary: value,
      };

      saveResume(updated);
      return { resume: updated };
    }),

  addExperience: () =>
    set((state) => {
      const newExperience: Experience = {
        id: crypto.randomUUID(),
        jobTitle: "",
        employer: "",
        city: "",
        country: "",
        startDate: "",
        endDate: "",
        currentlyWorking: false,
        description: "",
      };

      const updated = {
        ...state.resume,
        experiences: [...(state.resume.experiences || []), newExperience],
      };

      saveResume(updated);
      return { resume: updated };
    }),

  updateExperience: (id, field, value) =>
    set((state) => {
      const updated = {
        ...state.resume,
        experiences: (state.resume.experiences || []).map((exp) =>
          exp.id === id
            ? {
                ...exp,
                [field]: value,
              }
            : exp,
        ),
      };

      saveResume(updated);
      return { resume: updated };
    }),

  addEducation: () =>
    set((state) => {
      const education: Education = {
        id: crypto.randomUUID(),
        institution: "",
        degree: "",
        city: "",
        country: "",
        marks: "",
        accolades: "",
        startDate: "",
        endDate: "",
      };

      const updated = {
        ...state.resume,
        education: [...(state.resume.education || []), education],
      };

      saveResume(updated);
      return { resume: updated };
    }),

  updateEducation: (id, field, value) =>
    set((state) => {
      const updated = {
        ...state.resume,
        education: (state.resume.education || []).map((edu) =>
          edu.id === id
            ? {
                ...edu,
                [field]: value,
              }
            : edu,
        ),
      };

      saveResume(updated);
      return { resume: updated };
    }),

  addSkill: (skill) =>
    set((state) => {
      if (!skill.trim()) {
        return state;
      }

      const updated = {
        ...state.resume,
        skills: [...(state.resume.skills || []), skill],
      };

      saveResume(updated);
      return { resume: updated };
    }),

  removeSkill: (skill) =>
    set((state) => {
      const updated = {
        ...state.resume,
        skills: (state.resume.skills || []).filter((s) => s !== skill),
      };

      saveResume(updated);
      return { resume: updated };
    }),
}));
