import { memo } from 'react';

import { ActiveImageBorder } from './ActiveImageBorder';
import { ImageBorder } from './ImageBorder';
import style from './SliderImage.module.scss';

import { ReturnComponent } from 'types';

export const SliderImage = memo((): ReturnComponent => {
  return (
    <div className={style.imageWrapper}>
      <ActiveImageBorder />
      <ImageBorder />
      <ImageBorder />
    </div>
  );
});
