import { memo } from 'react';

import { Button } from 'components/generic/Button';
import { Heading } from 'components/generic/Heading';
import { Input } from 'components/generic/Input';
import { Paragraph } from 'components/generic/Paragraph';

import { yupResolver } from '@hookform/resolvers/yup';

import { anchors } from 'components/Header/enums';

import { useForm } from 'react-hook-form';

import { useAppDispatch } from 'hooks/useAppDispatch/useAppDispatch';
import { useAppSelector } from 'hooks/useAppSelector/useAppSelector';
import { ContactFormValues } from 'screens/ContactUs/types';
import { submitContactForm } from 'store/reducers';
import { selectIsFormLoading } from 'store/selectors/contactFormSelectors';

import style from './ContactUs.module.scss';

import { ReturnComponent } from 'types';
import { ContactFormSchema } from 'utils/validationSchemes';

export const ContactUs = memo((): ReturnComponent => {
  const dispatch = useAppDispatch();
  const isFormLoading = useAppSelector(selectIsFormLoading);

  const {
    register,
    handleSubmit,
    reset,
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
  const onFormSubmit = async (data: ContactFormValues): Promise<void> => {
    const resultAction = await dispatch(submitContactForm(data));

    if (submitContactForm.fulfilled.match(resultAction)) {
      reset();
    }
  };

  return (
    <section id={anchors.getInTouch} className={style.contactsBorder}>
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
        <Button type="submit" disabled={isFormLoading === 'loading'}>
          Send
        </Button>
      </form>
    </section>
  );
});
