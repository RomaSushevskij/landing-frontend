import { v1 } from 'uuid';

import angular from 'assets/images/technologies/angular.png';
import js from 'assets/images/technologies/js.png';
import react from 'assets/images/technologies/react.png';
import vue from 'assets/images/technologies/vue.png';
import { AccordionProps } from 'components/Accordion/types';
import { Step } from 'components/Stepper/types';
import { TechnologyCardProps } from 'components/TechnologyCard/types';

export const technologiesData: TechnologyCardProps[] = [
  { title: 'Angular', logo: angular },
  { title: 'React', logo: react },
  { title: 'Vue.js', logo: vue },
  { title: 'JavaScript', logo: js },
];

const stepCount = 6;
const two = 2;

export const stepsData: Step[] = [...Array(stepCount)].map((_, index) => ({
  id: v1(),
  title: index % two === 0 ? 'Overview of Development' : 'Introduction to Front-End',
  description:
    'Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis.',
}));

const accordionsCount = 5;

export const accordionsData: (AccordionProps & { id: string })[] = [
  ...Array(accordionsCount),
].map(() => ({
  id: v1(),
  summary: 'What is the price?',
  details:
    'Front-end engineers work closely with designers to make websites beautiful, functional, and fast. This Career Path will teach you not only the necessary languages and technologies, but how to think like a front-end engineer, too.',
}));
