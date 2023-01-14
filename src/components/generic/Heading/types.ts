import { DetailedHTMLProps, HTMLAttributes } from 'react';

type DefaultHeadingProps = DetailedHTMLProps<
  HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
>;

export type HeadingProps = DefaultHeadingProps & {
  customStyle?: string;
  headingLevel: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
};
