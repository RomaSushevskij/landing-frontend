import { memo } from 'react';

import style from './StepCard.module.scss';

import { Heading } from 'components/generic/Heading';
import { Paragraph } from 'components/generic/Paragraph';
import { StepCardProps } from 'components/StepCard/types';
import { ReturnComponent } from 'types';

export const StepCard = memo(
  ({ stepNumber, title, description, sideFrame }: StepCardProps): ReturnComponent => {
    const finalClassName = `${
      sideFrame === 'left'
        ? `${style.cardWrapper} ${style.sideFrameLeft}`
        : style.cardWrapper
    }`;

    return (
      <div className={finalClassName}>
        <div className={style.border}>
          <div className={style.content}>
            <Heading headingLevel="h4" customStyle={style.stepNumber}>
              Step {stepNumber}
            </Heading>
            <Heading headingLevel="h3" customStyle={style.stepTitle}>
              {title}
            </Heading>
            <Paragraph customStyle={style.stepDescription}>{description}</Paragraph>
          </div>
        </div>
      </div>
    );
  },
);
