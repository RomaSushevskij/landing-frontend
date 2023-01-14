import React, { ButtonHTMLAttributes, DetailedHTMLProps, memo } from 'react';

import style from './Button.module.scss';

import { ReturnComponent } from 'types';

type DefaultButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

type ButtonProps = DefaultButtonProps;

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
