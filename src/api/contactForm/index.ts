import { axiosInstance, endPoints } from 'api/config';
import { ContactFormValues } from 'screens/ContactUs/types';

export const formsAPI = {
  async submitContactForm(values: ContactFormValues) {
    const response = await axiosInstance.post(endPoints.feedback, values);

    console.log(response);
  },
};
