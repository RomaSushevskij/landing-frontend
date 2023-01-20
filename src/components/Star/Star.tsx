import { CSSProperties, memo } from 'react';

import style from './Star.module.scss';

import { StarProps } from 'components/Star/types';
import { ReturnComponent } from 'types';

export const Star = memo(
  ({ width, height, top, left, isShadow }: StarProps): ReturnComponent => {
    const styles: CSSProperties = {
      width,
      height,
      top: top || 0,
      left: `${left}%` || 0,
    };

    return isShadow ? (
      <div className={style.starShadow} style={styles} />
    ) : (
      <div className={style.star} style={styles} />
    );
  },
);
