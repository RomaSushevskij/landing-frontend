import { CSSProperties } from 'react';

import style from './Highlight.module.scss';

import { HighlightProps } from 'components/Highlight/types';
import { ReturnComponent } from 'types';

export const Highlight = ({
  top,
  bottom,
  left,
  right,
}: HighlightProps): ReturnComponent => {
  const styles: CSSProperties = {
    top: top || 0,
    bottom: bottom || 0,
    left: `${left}%` || 0,
    right: right || 0,
  };

  return (
    <div className={style.highlightWrapper} style={styles}>
      <div className={style.highlight} />
    </div>
  );
};
