import React, { memo } from 'react';

import { Heading } from 'components/generic/Heading';
import { Paragraph } from 'components/generic/Paragraph';

import style from './Technologies.module.scss';

import { anchors } from 'components/NavBar/enums';
import { TechnologyCard } from 'components/TechnologyCard';
import { technologiesData } from 'data/data';
import { ReturnComponent } from 'types';

export const Technologies = memo((): ReturnComponent => {
  const technologies = technologiesData.map(({ title, logo }) => {
    return <TechnologyCard key={logo} title={title} logo={logo} />;
  });

  return (
    <section id={anchors.program} className={style.technologiesWrapper}>
      <Heading level="h2"> Programming technologies</Heading>
      <Paragraph level="p1">
        By the end, you’ll have the portfolio and interview skills you need to start your
        new career.
      </Paragraph>
      <div className={style.technologies}>{technologies}</div>
    </section>
  );
});
