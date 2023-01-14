import React, {
  ChangeEvent,
  DetailedHTMLProps,
  InputHTMLAttributes,
  KeyboardEvent,
  memo,
} from 'react';

import style from './Input.module.scss';

import { ReturnComponent } from 'types';

type DefaultInputProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

type InputTextProps = DefaultInputProps & {
  onChangeText?: (value: string) => void;
  onEnter?: () => void;
  error?: string;
  spanClassName?: string;
  customStyle?: string;
};

export const Input = memo(
  ({
    type,
    onChange,
    onChangeText,
    onKeyPress,
    onEnter,
    error,
    className,
    spanClassName,
    name,
    customStyle,
    disabled,
    ...restProps
  }: InputTextProps): ReturnComponent => {
    const finalInputWrapperClassName = customStyle
      ? `${customStyle} ${style.inputWrapper}`
      : style.inputWrapper;

    const finalInputClassName = `${
      error ? `${style.errorInput} ${style.input}` : style.input
    } ${className}`;

    const finalSpanClassName = `${style.error} ${spanClassName || ''}`;

    let finalBorderClassName: string;

    if (error) {
      finalBorderClassName = `${`${style.border} ${style.errorBorder}`}`;
    } else {
      finalBorderClassName = `${
        disabled ? `${style.border} ${style.disabledBorder}` : style.border
      }`;
    }

    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>): void => {
      if (onChange) onChange(e);
      if (onChangeText) onChangeText(e.currentTarget.value);
    };

    const onKeyPressCallback = (e: KeyboardEvent<HTMLInputElement>): void => {
      if (onKeyPress) onKeyPress(e);
      if (onEnter && e.key === 'Enter') onEnter();
    };

    return (
      <div className={finalInputWrapperClassName}>
        <div className={finalBorderClassName}>
          <input
            name={name}
            type={type}
            onChange={onChangeCallback}
            onKeyPress={onKeyPressCallback}
            className={finalInputClassName}
            disabled={disabled}
            {...restProps}
          />
        </div>
        {error && <div className={finalSpanClassName}>{error}</div>}
      </div>
    );
  },
);
