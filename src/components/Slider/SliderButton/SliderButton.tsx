import { memo } from 'react';

import style from './SliderButton.module.scss';

import { NextIcon } from 'components/Icons/NextIcon';
import { PrevIcon } from 'components/Icons/PrevIcon/PrevIcon';
import { SliderButtonProps } from 'components/Slider/SliderButton/types';
import { ReturnComponent } from 'types';

export const SliderButton = memo(
  ({ direction, onClick, disabled }: SliderButtonProps): ReturnComponent => {
    return (
      <button
        type="button"
        className={style.btnWrapper}
        onClick={onClick}
        disabled={disabled}
      >
        {direction === 'next' ? <NextIcon /> : <PrevIcon />}
      </button>
    );
  },
);
