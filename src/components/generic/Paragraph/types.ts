import { DetailedHTMLProps, HTMLAttributes } from 'react';

type DefaultParagraphProps = DetailedHTMLProps<
  HTMLAttributes<HTMLParagraphElement>,
  HTMLParagraphElement
>;

export type ParagraphProps = DefaultParagraphProps & {
  customStyle?: string;
  level: 'p1' | 'p2';
};
