import { memo } from 'react';

import { StepPoint } from 'components/Stepper/StepPoint/StepPoint';
import { StepperProps } from 'components/Stepper/types';
import { ReturnComponent } from 'types';

export const Stepper = memo(({ steps }: StepperProps): ReturnComponent => {
  const stepsView = steps.map(({ title }, index) => {
    return (
      <StepPoint
        key={title + new Date()}
        stepNumber={index + 1}
        stepCount={steps.length}
      />
    );
  });

  return <div>{stepsView}</div>;
});