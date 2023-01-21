import { memo } from 'react';

import { Button } from 'components/generic/Button';

import style from './Main.module.scss';

import { Heading } from 'components/generic/Heading';
import { Paragraph } from 'components/generic/Paragraph';
import { ReturnComponent } from 'types';

export const Main = memo((): ReturnComponent => {
  return (
    <section className={style.mainWrapper}>
      <Heading level="h1" customStyle={style.frontEnd}>
        Front-End
      </Heading>
      <Paragraph level="p1" customStyle={style.description}>
        Make UIs and websites beautiful, functional, and fast. Cover all the topics that
        expensive bootcamps teach (and more).{' '}
      </Paragraph>
      <div className={style.btn}>
        <Button>Start my career change</Button>
      </div>
      <Heading level="h1" customStyle={style.developer}>
        Developer
      </Heading>
      <Heading level="h3" customStyle={style.courses}>
        Courses
      </Heading>
    </section>
  );
});
