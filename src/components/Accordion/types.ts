export type AccordionProps = {
  id: string;
  expanded?: boolean;
  onChange?: (accordionId: string) => void;
  summary: string;
  details: string;
};
