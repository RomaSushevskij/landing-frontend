import React, { memo } from 'react';

import KristinWatson from 'assets/images/mentors/KristinWatson.png';
import RobertFox from 'assets/images/mentors/RobertFox.png';
import WadeWarren from 'assets/images/mentors/WadeWarren.png';

import style from './AboutUs.module.scss';

import { Heading } from 'components/generic/Heading';
import { Paragraph } from 'components/generic/Paragraph';
import { MentorCard } from 'components/MentorCard';
import { ArrowTrident } from 'screens/AboutUs/ArrowTrident';

export const AboutUs = memo(() => {
  return (
    <div className={style.aboutUsWrapper}>
      <Heading level="h2">About Us</Heading>
      <div className={style.content}>
        <div className={style.mentors}>
          <Heading level="h3">Mentors</Heading>
          <div className={style.mentorCards}>
            <div className={style.arrowTrident}>
              <ArrowTrident />
            </div>
            <div className={style.mentorCard}>
              <MentorCard
                name="Wade Warren"
                image={WadeWarren}
                description="Front-end engineers work closely with designers"
                customImageStyle={style.wadeWarrenImage}
              />
            </div>
            <div className={style.mentorCard}>
              <MentorCard
                name="Kristin Watson"
                image={KristinWatson}
                description="Front-end engineers work closely with designers"
              />
            </div>
            <div className={style.mentorCard}>
              <MentorCard
                name="Robert Fox"
                image={RobertFox}
                description="Front-end engineers work closely with designers"
                customImageStyle={style.robertFoxImage}
              />
            </div>
          </div>
        </div>
        <Paragraph level="p1" customStyle={style.descriptions}>
          Front-end engineers work closely with designers to make websites beautiful,
          functional, and fast. This Career Path will teach you not only the necessary
          languages and technologies, but how to think like a front-end engineer, too.
        </Paragraph>
      </div>
    </div>
  );
});
