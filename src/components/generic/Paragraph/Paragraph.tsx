import { memo } from 'react';

import style from './Paragraph.module.scss';

import { ParagraphProps } from 'components/generic/Paragraph/types';
import { ReturnComponent } from 'types';

export const Paragraph = memo(
  ({ customStyle, children, level }: ParagraphProps): ReturnComponent => {
    const paragraphClassName = level === 'p1' ? style.paragraphP1 : style.paragraphP2;
    const finalClassName = customStyle
      ? `${paragraphClassName} ${customStyle}`
      : paragraphClassName;

    return <p className={finalClassName}>{children}</p>;
  },
);
