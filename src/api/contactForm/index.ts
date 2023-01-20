import { axiosInstance, endPoints } from 'api/config';
import { ContactFormValues } from 'screens/ContactUs/types';

export const formsAPI = {
  async submitContactForm(values: ContactFormValues) {
    await axiosInstance.post<ContactFormValues & { id: number }>(
      endPoints.feedback,
      values,
    );
  },
};
