import React from 'react';

import style from './StepPoint.module.scss';

import { StepCard } from 'components/StepCard';
import { StepArrow } from 'components/Stepper/StepArrow/StepArrow';
import { StepPointProps } from 'components/Stepper/StepPoint/types';
import { ReturnComponent } from 'types';

export const StepPoint = ({ stepNumber, stepCount }: StepPointProps): ReturnComponent => {
  const isNoConnector = (stepNumber === 1 && stepCount === 1) || stepNumber === stepCount;
  const two = 2;
  const isEvenStepNumber = stepNumber % two === 0;
  const finalConnectorClassName = isEvenStepNumber
    ? style.evenConnector
    : style.oddConnector;

  const finalStepWrapperClassName = isEvenStepNumber
    ? `${style.stepWrapper} ${style.even}`
    : style.stepWrapper;

  const finalArrowClassName = isEvenStepNumber
    ? `${style.arrow} ${style.even}`
    : style.arrow;

  return (
    <div className={finalStepWrapperClassName}>
      <div className={style.stepCard}>
        <StepCard
          stepNumber={2}
          title="Overview of Development"
          description="Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis."
          sideFrame={isEvenStepNumber ? 'left' : 'right'}
        />
      </div>
      <div className={finalArrowClassName}>
        <StepArrow direction={isEvenStepNumber ? 'right' : 'left'} />
      </div>
      <div className={style.connector}>
        <div className={style.stepPoint} />
        {!isNoConnector && <div className={finalConnectorClassName} />}
      </div>
      <div className={style.empty} />
    </div>
  );
};
