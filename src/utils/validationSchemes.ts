import { object, SchemaOf, string } from 'yup';

import { ContactFormValues } from 'screens/ContactUs/types';

const regExp = /^(\+)?((\d{2,3}) ?\d|\d)(([ -]?\d)|( ?(\d{2,3}) ?)){5,12}\d$/;

export const ContactFormSchema: SchemaOf<Omit<ContactFormValues, 'rememberMe'>> =
  object().shape({
    name: string().required('Field is required'),
    phone: string()
      .required('Field is required')
      .test('checkPhone', 'Invalid phone number', value => regExp.test(value as string)),
    eMail: string().required('Field is required').email('Invalid email address'),
  });
