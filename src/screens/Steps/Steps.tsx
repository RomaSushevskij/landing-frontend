import React, { memo } from 'react';

import { Heading } from 'components/generic/Heading';

import style from './Steps.module.scss';

import { anchors } from 'components/Header/enums';
import { Stepper } from 'components/Stepper';
import { stepsData } from 'data/data';
import { ReturnComponent } from 'types';

export const Steps = memo((): ReturnComponent => {
  return (
    <section id={anchors.steps} className={style.stepsWrapper}>
      <Heading level="h2">Steps</Heading>
      <Stepper steps={stepsData} />
    </section>
  );
});
