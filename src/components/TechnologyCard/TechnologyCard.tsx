import { memo } from 'react';

import style from './TechnologyCard.module.scss';

import { Heading } from 'components/generic/Heading';
import { TechnologyCardFormat } from 'components/TechnologyCard/TechnologyCardFormat';
import { TechnologyCardProps } from 'components/TechnologyCard/types';
import { ReturnComponent } from 'types';

export const TechnologyCard = memo(
  ({ title, logo }: TechnologyCardProps): ReturnComponent => {
    return (
      <div className={style.cardWrapper}>
        <TechnologyCardFormat />
        <div className={style.innerCard}>
          <div className={style.technologyLogo}>
            <img src={logo} alt="angular" />
          </div>
          <Heading headingLevel="h4" customStyle={style.technologyTitle}>
            {title}
          </Heading>
        </div>
      </div>
    );
  },
);
