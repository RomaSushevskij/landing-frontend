import React, { memo, useCallback, useState } from 'react';

import { Accordion } from 'components/Accordion';
import { Heading } from 'components/generic/Heading';
import { Paragraph } from 'components/generic/Paragraph';

import style from './Asks.module.scss';

import { anchors } from 'components/Header/enums';
import { accordionsData } from 'data/data';
import { AskMark } from 'screens/Asks/AskMark/AskMark';
import { ReturnComponent } from 'types';

export const Asks = memo((): ReturnComponent => {
  const [activeAccordionId, setActiveAccordionId] = useState(() => accordionsData[0].id);

  const onActiveAccordionIdChange = useCallback(
    (id: string): void => {
      if (activeAccordionId === id) {
        setActiveAccordionId('');

        return;
      }
      setActiveAccordionId(id);
    },
    [activeAccordionId, setActiveAccordionId],
  );
  const accordions = accordionsData.map(({ id, summary, details }) => {
    return (
      <div key={id} className={style.accordionBlock}>
        <Accordion
          id={id}
          summary={summary}
          details={details}
          expanded={activeAccordionId === id}
          onChange={onActiveAccordionIdChange}
        />
      </div>
    );
  });

  return (
    <section id={anchors.questions} className={style.asksWrapper}>
      <Heading level="h2">Frequently Asked Questions</Heading>
      <div className={style.asksContent}>
        <div className={style.question}>
          <Paragraph level="p1">Do you have any kind of questions?</Paragraph>
          <Paragraph level="p1">We are here to help.</Paragraph>
          <div className={style.askMark}>
            <AskMark />
          </div>
        </div>
        <div className={style.accordions}>{accordions}</div>
      </div>
    </section>
  );
});
