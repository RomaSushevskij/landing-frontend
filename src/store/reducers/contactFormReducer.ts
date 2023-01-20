import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { formsAPI } from 'api';
import { ContactFormValues } from 'screens/ContactUs/types';

export const submitContactForm = createAsyncThunk<
  void,
  ContactFormValues,
  { rejectValue: string }
>('contactForm/submit', async values => {
  try {
    await formsAPI.submitContactForm(values);
  } catch (e) {
    console.log(e);
  }
});

const slice = createSlice({
  name: 'contactForm',
  initialState: {
    isFormLoading: false,
  },
  reducers: {},
});

export const contactFormReducer = slice.reducer;
