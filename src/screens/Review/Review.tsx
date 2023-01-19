import React, { memo } from 'react';

import { Heading } from 'components/generic/Heading';

import style from './Review.module.scss';

import { Paragraph } from 'components/generic/Paragraph';
import { Slider } from 'components/Slider';
import { sliderImagesData } from 'data/data';
import { ReturnComponent } from 'types';

export const Review = memo((): ReturnComponent => {
  return (
    <div className={style.reviewWrapper}>
      <Heading level="h2">Review</Heading>
      <div className={style.reviewContent}>
        <div className={style.descriptions}>
          <Heading level="h4">Best courses ever</Heading>
          <Paragraph level="p1">
            Good course, up to this point, still ongoing. The only downside, why I gave
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            4,5 stars, because the "teacher" sometimes feel like, he is lost, and takes up
            quite a time, to correct himself, and check back etc.
          </Paragraph>
        </div>
        <Slider
          images={sliderImagesData}
          firstImageStyle={style.firstImage}
          secondImageStyle={style.secondImage}
          thirdImageStyle={style.thirdImage}
        />
      </div>
    </div>
  );
});
