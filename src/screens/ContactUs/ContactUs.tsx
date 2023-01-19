import { memo } from 'react';

import { Button } from 'components/generic/Button';

import style from './ContactUs.module.scss';

import { Heading } from 'components/generic/Heading';
import { Input } from 'components/generic/Input';
import { Paragraph } from 'components/generic/Paragraph';
import { ReturnComponent } from 'types';

export const ContactUs = memo((): ReturnComponent => {
  return (
    <div className={style.contactsBorder}>
      <Heading level="h2">Contact Us</Heading>
      <Paragraph level="p1">
        Do you have any kind of help please contact with us.
      </Paragraph>
      <form>
        <div className={style.input}>
          <Input placeholder="Name" />
        </div>
        <div className={style.input}>
          <Input placeholder="Phone" />
        </div>
        <div className={style.input}>
          <Input placeholder="E-mail" />
        </div>
        <Button>Send</Button>
      </form>
    </div>
  );
});
