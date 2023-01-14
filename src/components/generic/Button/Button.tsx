import React, { ButtonHTMLAttributes, DetailedHTMLProps, memo } from 'react';

import style from './Button.module.scss';

import { ReturnComponentType } from 'types';

type DefaultButtonPropsType = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

type SuperButtonPropsType = DefaultButtonPropsType;

export const Button = memo(
  ({ type, className, ...restProps }: SuperButtonPropsType): ReturnComponentType => {
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
