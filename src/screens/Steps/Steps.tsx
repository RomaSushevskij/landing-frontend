import React, { memo } from 'react';

import style from './Steps.module.scss';

import { Heading } from 'components/generic/Heading';
import { Stepper } from 'components/Stepper';
import { stepsData } from 'data/data';
import { ReturnComponent } from 'types';

export const Steps = memo((): ReturnComponent => {
  return (
    <div className={style.stepsWrapper}>
      <Heading level="h2">Steps</Heading>
      <Stepper steps={stepsData} />
    </div>
  );
});
