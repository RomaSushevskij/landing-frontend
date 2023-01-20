import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import { formsAPI, RequestStatusType } from 'api';
import { ContactFormValues } from 'screens/ContactUs/types';

export const submitContactForm = createAsyncThunk<
  void,
  ContactFormValues,
  { rejectValue: string }
>('contactForm/submit', async (values, { rejectWithValue }) => {
  try {
    await formsAPI.submitContactForm(values);
  } catch (e) {
    const { message } = e as AxiosError;

    rejectWithValue(message);
  }
});

const slice = createSlice({
  name: 'contactForm',
  initialState: {
    isFormLoading: 'idle' as RequestStatusType,
    message: '',
  },
  reducers: {},
  extraReducers: builder =>
    builder
      .addCase(submitContactForm.pending, state => {
        state.isFormLoading = 'loading';
      })
      .addCase(submitContactForm.fulfilled, state => {
        state.isFormLoading = 'succeeded';
      })
      .addCase(submitContactForm.rejected, (state, { payload }) => {
        state.isFormLoading = 'failed';
        if (payload) state.message = payload;
      }),
});

export const contactFormReducer = slice.reducer;
