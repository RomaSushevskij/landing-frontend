import { memo } from 'react';

import style from './Paragraph.module.scss';

import { ParagraphProps } from 'components/generic/Paragraph/types';
import { ReturnComponent } from 'types';

export const Paragraph = memo(
  ({ customStyle, children }: ParagraphProps): ReturnComponent => {
    const finalClassName = customStyle
      ? `${customStyle} ${style.paragraph}`
      : style.paragraph;

    return <p className={finalClassName}>{children}</p>;
  },
);
