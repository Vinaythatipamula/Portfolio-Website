import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  projects: [],
  experiences: [],
  skills: [],
  testimonials: [],
  contactForm: {
    name: '',
    email: '',
    message: '',
  },
  isSubmitting: false,
};

const portfolioSlice = createSlice({
  name: 'portfolio',
  initialState,
  reducers: {
    setProjects: (state, action) => {
      state.projects = action.payload;
    },
    setExperiences: (state, action) => {
      state.experiences = action.payload;
    },
    setSkills: (state, action) => {
      state.skills = action.payload;
    },
    setTestimonials: (state, action) => {
      state.testimonials = action.payload;
    },
    updateContactForm: (state, action) => {
      state.contactForm = { ...state.contactForm, ...action.payload };
    },
    resetContactForm: (state) => {
      state.contactForm = {
        name: '',
        email: '',
        message: '',
      };
    },
    setSubmitting: (state, action) => {
      state.isSubmitting = action.payload;
    },
  },
});

export const {
  setProjects,
  setExperiences,
  setSkills,
  setTestimonials,
  updateContactForm,
  resetContactForm,
  setSubmitting,
} = portfolioSlice.actions;

export default portfolioSlice.reducer;
