import React from 'react';

import style from './StepPoint.module.scss';

import { StepArrow } from 'components/Stepper/StepArrow';
import { StepCard } from 'components/Stepper/StepCard';
import { StepPointProps } from 'components/Stepper/StepPoint/types';
import { ReturnComponent } from 'types';

export const StepPoint = ({
  stepNumber,
  stepCount,
  stepTitle,
  stepDescription,
}: StepPointProps): ReturnComponent => {
  const isFirstPoint = stepNumber === 1;
  const isLastPoint = stepNumber === stepCount;
  const isSinglePoint = stepCount === 1;
  const isNoConnector = (isFirstPoint && isSinglePoint) || isLastPoint;
  const two = 2;
  const isEvenStepNumber = stepNumber % two === 0;

  const finalStepWrapperClassName = isEvenStepNumber
    ? `${style.stepWrapper} ${style.even}`
    : style.stepWrapper;

  const finalArrowClassName = isEvenStepNumber
    ? `${style.arrow} ${style.even}`
    : style.arrow;

  const finalAggregateClassName = isFirstPoint
    ? `${style.aggregate} ${style.first}`
    : style.aggregate;

  return (
    <div className={finalStepWrapperClassName}>
      <div className={style.stepCard}>
        <StepCard
          stepNumber={stepNumber}
          title={stepTitle}
          description={stepDescription}
          sideFrame={isEvenStepNumber ? 'left' : 'right'}
        />
      </div>
      <div className={finalArrowClassName}>
        <StepArrow direction={isEvenStepNumber ? 'right' : 'left'} />
      </div>
      <div className={style.stepBlock}>
        {(isFirstPoint || isLastPoint) && <div className={finalAggregateClassName} />}
        <div className={style.stepPoint} />
        {!isNoConnector && <div className={style.connector} />}
      </div>
      <div className={style.empty} />
    </div>
  );
};
