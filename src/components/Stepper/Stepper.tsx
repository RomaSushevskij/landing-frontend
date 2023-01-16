import { memo } from 'react';

import style from './Stepper.module.scss';

import { StepPoint } from 'components/Stepper/StepPoint/StepPoint';
import { StepperProps } from 'components/Stepper/types';
import { ReturnComponent } from 'types';

export const Stepper = memo(({ steps }: StepperProps): ReturnComponent => {
  const stepsView = steps.map(({ id, title, description }, index) => {
    return (
      <StepPoint
        key={id}
        stepNumber={index + 1}
        stepCount={steps.length}
        stepTitle={title}
        stepDescription={description}
      />
    );
  });

  return <div className={style.stepperWrapper}>{stepsView}</div>;
});
