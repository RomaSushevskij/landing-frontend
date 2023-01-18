import { memo } from 'react';

import style from 'components/generic/Heading/Heading.module.scss';
import { HeadingProps } from 'components/generic/Heading/types';
import { ReturnComponent } from 'types';

export const Heading = memo(
  ({ customStyle, children, level: HeadingLevel }: HeadingProps): ReturnComponent => {
    const finalClassName = customStyle
      ? `${style.heading} ${customStyle}`
      : style.heading;

    return <HeadingLevel className={finalClassName}>{children}</HeadingLevel>;
  },
);
