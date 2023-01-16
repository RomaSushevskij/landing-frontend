import { memo } from 'react';

import style from './Accordion.module.scss';

import { AccordionProps } from 'components/Accordion/types';
import { Heading } from 'components/generic/Heading';
import { Paragraph } from 'components/generic/Paragraph';
import { ReturnComponent } from 'types';

export const Accordion = memo(({ summary, details }: AccordionProps): ReturnComponent => {
  return (
    <div className={style.accordionWrapper}>
      <div className={style.border}>
        <div className={style.content}>
          <Heading headingLevel="h4" customStyle={style.accordionSummary}>
            {summary}
          </Heading>
          <Paragraph>{details}</Paragraph>
        </div>
      </div>
    </div>
  );
});
