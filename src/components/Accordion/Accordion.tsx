import { memo, useState } from 'react';

import { AccordionProps } from 'components/Accordion/types';
import { Heading } from 'components/generic/Heading';

import style from './Accordion.module.scss';

import { Paragraph } from 'components/generic/Paragraph';
import { AddIcon } from 'components/icons/AddIcon';
import { RemoveIcon } from 'components/icons/RemoveIcon';
import { ReturnComponent } from 'types';

export const Accordion = memo(
  ({ id, summary, details, expanded, onChange }: AccordionProps): ReturnComponent => {
    const [isExpandedLocal, setIsExpandedLocal] = useState(false);

    const isExpandedFromProps = expanded !== undefined;

    const onClick = (): void => {
      if (isExpandedFromProps && onChange) {
        onChange(id);

        return;
      }
      setIsExpandedLocal(!isExpandedLocal);
    };

    const isAccordionExpanded = isExpandedFromProps ? expanded : isExpandedLocal;

    const finalContentStyle = isAccordionExpanded
      ? `${style.content} ${style.expanded}`
      : style.content;

    const finalExpandIconStyle = isAccordionExpanded
      ? `${style.expandIcon} ${style.expanded}`
      : style.expandIcon;

    const finalAccordionDetailsClassName = isAccordionExpanded
      ? `${style.accordionDetails} ${style.expanded}`
      : style.accordionDetails;

    return (
      <div className={style.accordionWrapper}>
        <div className={style.border}>
          <div className={finalContentStyle}>
            <Heading level="h4" customStyle={style.accordionSummary}>
              {summary}
            </Heading>
            <Paragraph level="p1" customStyle={finalAccordionDetailsClassName}>
              {details}
            </Paragraph>
            <button className={finalExpandIconStyle} type="button" onClick={onClick}>
              {isAccordionExpanded ? <RemoveIcon /> : <AddIcon />}
            </button>
          </div>
        </div>
      </div>
    );
  },
);
