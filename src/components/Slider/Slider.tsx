import { memo, useState } from 'react';

import { Heading } from 'components/generic/Heading';

import style from './Slider.module.scss';

import { Paragraph } from 'components/generic/Paragraph';

import { SliderImage } from './SliderImage';

import { SliderButton } from 'components/Slider/SliderButton';
import { SliderImageType, SliderProps } from 'components/Slider/types';
import { ReturnComponent } from 'types';

export const Slider = memo(
  ({
    images,
    firstImageStyle,
    secondImageStyle,
    thirdImageStyle,
  }: SliderProps): ReturnComponent => {
    const [sliderImages, setSliderImages] = useState<SliderImageType[]>(() => images);

    const firstImageIndex = Number(sliderImages[0].index);

    const sliderImagesData = sliderImages.map((image, index) => {
      const isActive = index === 0;
      let imageStyle: string | undefined;

      switch (image.index) {
        case '1':
          imageStyle = firstImageStyle;
          break;
        case '2':
          imageStyle = secondImageStyle;
          break;
        default:
          imageStyle = thirdImageStyle;
      }

      return (
        <SliderImage
          key={image.image}
          isActive={isActive}
          image={image.image}
          imageStyle={imageStyle}
        />
      );
    });

    const onNextBtnClick = (): void => {
      const nextSliderImages: SliderImageType[] = [...sliderImages];

      const lastEl = nextSliderImages.splice(0, 1)[0];

      nextSliderImages.push(lastEl);

      setSliderImages(nextSliderImages);
    };

    const onPrevBtnClick = (): void => {
      const nextSliderImages: SliderImageType[] = [...sliderImages];
      const lastEl = nextSliderImages.splice(sliderImages.length - 1, 1)[0];

      nextSliderImages.unshift(lastEl);

      setSliderImages(nextSliderImages);
    };

    return (
      <div className={style.sliderWrapper}>
        <div className={style.controlBlock}>
          <div className={style.whatNumber}>
            <Heading level="h4">{sliderImages[0].index}/</Heading>
            <Paragraph level="p1">{sliderImages.length}</Paragraph>
          </div>
          <div className={style.btnBlock}>
            <SliderButton
              direction="prev"
              onClick={onPrevBtnClick}
              disabled={sliderImages[0].index === '1'}
            />
            <SliderButton
              direction="next"
              onClick={onNextBtnClick}
              disabled={firstImageIndex === sliderImages.length}
            />
          </div>
        </div>
        <div className={style.imagesBlock}>{sliderImagesData}</div>
      </div>
    );
  },
);
