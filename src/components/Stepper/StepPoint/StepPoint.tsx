import style from './StepPoint.module.scss';

import { StepPointProps } from 'components/Stepper/StepPoint/types';
import { ReturnComponent } from 'types';

export const StepPoint = ({ stepNumber, stepCount }: StepPointProps): ReturnComponent => {
  const isNoConnector = (stepNumber === 1 && stepCount === 1) || stepNumber === stepCount;
  const two = 2;
  const finalConnectorClassName =
    stepNumber % two === 0 ? style.evenConnector : style.oddConnector;

  return (
    <div className={style.connectorWrapper}>
      <div className={style.stepPoint} />
      {!isNoConnector && <div className={finalConnectorClassName} />}
    </div>
  );
};
