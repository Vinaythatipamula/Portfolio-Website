import { configureStore } from '@reduxjs/toolkit';
import uiSlice from './slices/uiSlice';
import portfolioSlice from './slices/portfolioSlice';

export const store = configureStore({
  reducer: {
    ui: uiSlice,
    portfolio: portfolioSlice,
  },
});
