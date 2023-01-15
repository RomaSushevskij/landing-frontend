import { memo } from 'react';

import style from './Image.module.scss';
import { ImageProps } from './types';

import { ReturnComponent } from 'types';

export const Image = memo(({ image, customImageStyle }: ImageProps): ReturnComponent => {
  const finalClassName = customImageStyle
    ? `${style.image} ${customImageStyle}`
    : style.image;

  return (
    <div className={style.border}>
      <div className={finalClassName} style={{ backgroundImage: `url(${image})` }} />
    </div>
  );
});
