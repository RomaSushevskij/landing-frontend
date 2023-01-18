import { memo } from 'react';

import { ReturnComponent } from '../../types';

import { SliderImage } from './SliderImage';

export const Slider = memo((): ReturnComponent => {
  return <SliderImage />;
});
