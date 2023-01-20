import { RequestStatusType } from 'api';
import { AppStateType } from 'store/types';

export const selectIsFormLoading = (state: AppStateType): RequestStatusType =>
  state.contactForm.isFormLoading;
