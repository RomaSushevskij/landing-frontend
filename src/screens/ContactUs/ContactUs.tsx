import { memo } from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

import { Button } from 'components/generic/Button';
import { Heading } from 'components/generic/Heading';
import { Input } from 'components/generic/Input';
import { Paragraph } from 'components/generic/Paragraph';
import { ContactFormValues } from 'screens/ContactUs/types';

import style from './ContactUs.module.scss';

import { ReturnComponent } from 'types';
import { ContactFormSchema } from 'utils/validationSchemes';

export const ContactUs = memo((): ReturnComponent => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onTouched',
    defaultValues: {
      name: '',
      phone: '',
      eMail: '',
    },
    resolver: yupResolver(ContactFormSchema),
  });
  const onFormSubmit = (data: ContactFormValues): void => {
    console.log(data);
  };

  return (
    <div className={style.contactsBorder}>
      <Heading level="h2">Contact Us</Heading>
      <Paragraph level="p1" customStyle={style.formDescription}>
        Do you have any kind of help please contact with us.
      </Paragraph>
      <form onSubmit={handleSubmit(onFormSubmit)}>
        <div className={style.input}>
          <Input error={errors.name?.message} placeholder="Name" {...register('name')} />
        </div>
        <div className={style.input}>
          <Input
            error={errors.phone?.message}
            placeholder="Phone"
            {...register('phone')}
          />
        </div>
        <div className={style.input}>
          <Input
            error={errors.eMail?.message}
            placeholder="E-mail"
            {...register('eMail')}
          />
        </div>
        <Button type="submit">Send</Button>
      </form>
    </div>
  );
});
