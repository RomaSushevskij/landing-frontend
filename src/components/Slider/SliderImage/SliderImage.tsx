import { memo } from 'react';

import { ActiveImageFrame } from 'components/Slider/SliderImage/ImageFrame/ActiveImageFrame';
import { ImageFrame } from 'components/Slider/SliderImage/ImageFrame/ImageFrame';
import { SliderImageProps } from 'components/Slider/SliderImage/types';
import { ReturnComponent } from 'types';

export const SliderImage = memo(
  ({ isActive, image, imageStyle }: SliderImageProps): ReturnComponent => {
    if (isActive) {
      return <ActiveImageFrame image={image} imageStyle={imageStyle} />;
    }

    return <ImageFrame image={image} imageStyle={imageStyle} />;
  },
);
