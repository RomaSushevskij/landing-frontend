import { memo } from 'react';

import { Heading } from 'components/generic/Heading';

import style from './MentorCard.module.scss';

import { Paragraph } from 'components/generic/Paragraph';
import { Image } from 'components/MentorCard/Image';
import { MentorCardProps } from 'components/MentorCard/types';
import { ReturnComponent } from 'types';

export const MentorCard = memo(
  ({ name, image, description, customImageStyle }: MentorCardProps): ReturnComponent => {
    return (
      <div className={style.mentorCardWrapper}>
        <Image image={image} customImageStyle={customImageStyle} />
        <div className={style.name}>
          <Heading level="h4" customStyle={style.mentorName}>
            {name}
          </Heading>
        </div>
        <Paragraph level="p1" customStyle={style.mentorDescription}>
          {description}
        </Paragraph>
      </div>
    );
  },
);
