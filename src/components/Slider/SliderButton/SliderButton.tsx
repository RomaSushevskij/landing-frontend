import { memo } from 'react';

import style from './SliderButton.module.scss';

import { NextIcon } from 'components/icons/NextIcon';
import { PrevIcon } from 'components/icons/PrevIcon/PrevIcon';
import { SliderButtonProps } from 'components/Slider/SliderButton/types';
import { ReturnComponent } from 'types';

export const SliderButton = memo(
  ({ direction, onClick, disabled }: SliderButtonProps): ReturnComponent => {
    const finalBntClassName =
      direction === 'next' ? `${style.btnWrapper} ${style.next}` : style.btnWrapper;

    return (
      <button
        type="button"
        className={finalBntClassName}
        onClick={onClick}
        disabled={disabled}
      >
        {direction === 'next' ? <NextIcon /> : <PrevIcon />}
      </button>
    );
  },
);
