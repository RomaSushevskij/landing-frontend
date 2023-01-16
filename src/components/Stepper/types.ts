export type Step = {
  id: string;
  title: string;
  description: string;
};

export type StepperProps = {
  steps: Step[];
};
