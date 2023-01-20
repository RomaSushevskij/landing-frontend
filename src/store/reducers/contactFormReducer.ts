import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'contactForm',
  initialState: {
    isFormLoading: false,
  },
  reducers: {},
});

export const contactFormReducer = slice.reducer;
