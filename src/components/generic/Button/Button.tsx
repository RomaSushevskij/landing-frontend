import React, { memo } from 'react';

import style from './Button.module.scss';
import { ButtonProps } from './types';

import { ReturnComponent } from 'types';

export const Button = memo(
  ({ type, className, ...restProps }: ButtonProps): ReturnComponent => {
    const finalClassName = `${style.default} ${className}`;

    return (
      <button
        type={type === 'submit' ? 'submit' : 'button'}
        className={`${finalClassName} `}
        {...restProps}
      />
    );
  },
);
