import { DetailedHTMLProps, HTMLAttributes } from 'react';

type DefaultHeadingProps = DetailedHTMLProps<
  HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
>;

export type HeadingProps = DefaultHeadingProps & {
  customStyle?: string;
  level: 'h1' | 'h2' | 'h3' | 'h4';
};
