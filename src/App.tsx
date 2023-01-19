import React from 'react';

import { NavBar } from 'components/NavBar';
import { Substrate } from 'components/Substrate';
import { AboutUs } from 'screens/AboutUs';
import { Asks } from 'screens/Asks';
import { ContactUs } from 'screens/ContactUs';
import { Gallery } from 'screens/Gallery';
import { Main } from 'screens/Main';
import { Review } from 'screens/Review';

import style from './App.module.scss';

import { Steps } from 'screens/Steps';
import { Technologies } from 'screens/Techhologies';
import { ReturnComponent } from 'types';

// const stepsTitles = ['Overview of Development', 'Introduction to Front-End'];
// const stepsDescr = [
//   'Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis.',
//   'Lorem ipsum dolor sit amet consectetur.',
//   'Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. Lorem ipsum dolor sit amet consectetur.',
//   'Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis.Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis.Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis.',
//   'Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. Lorem ipsum dolor sit amet consectetur.',
//   'Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. Lorem ipsum dolor sit amet consectetur.',
//   'Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis.Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis.Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis.',
// ];
//
// const stepCount = 6;
//
// export const steps: Step[] = [...Array(stepCount)].map((_, index) => ({
//   id: v1(),
//   title: stepsTitles[index % stepsTitles.length],
//   description: stepsDescr[index % stepsDescr.length],
// }));
//
// const accordionsSummary = ['What is the price?'];
// const accordionsDetails = [
//   'Front-end engineers work closely with designers to make websites beautiful, functional, and fast. This Career Path will teach you not only the necessary languages and technologies, but how to think like a front-end engineer, too. Front-end engineers work closely with designers to make websites beautiful, functional, and fast. This Career Path will teach you not only the necessary languages and technologies, but how to think like a front-end engineer, too.',
//   'Front-end engineers work closely with designers to make websites beautiful, functional, and fast. This Career Path will teach you not only the necessary languages and technologies, but how to think like a front-end engineer, too.',
//   'Front-end engineers work closely with designers to make websites beautiful, functional, and fast. This Career Path will teach you not only the necessary languages and technologies, but how to think like a front-end engineer, too. Front-end engineers work closely with designers to make websites beautiful, functional, and fast. This Career Path will teach you not only the necessary languages and technologies, but how to think like a front-end engineer, too.',
//   'Front-end engineers work closely with designers to make websites beautiful, functional, and fast. This Career Path will teach you not only the necessary languages and technologies, but how to think like a front-end engineer, too.',
//   'Front-end engineers work closely with designers to make websites beautiful, functional, and fast. This Career Path will teach you not only the necessary languages and technologies, but how to think like a front-end engineer, too.',
// ];
//
// const accordionsCount = 5;
//
// const accordions: (AccordionProps & { id: string })[] = [...Array(accordionsCount)].map(
//   (_, index) => ({
//     id: v1(),
//     summary: accordionsSummary[index % accordionsSummary.length],
//     details: accordionsDetails[index % accordionsDetails.length],
//   }),
// );
//
// const sliderImagesData: SliderImageType[] = [
//   { index: '1', image: person1 },
//   { index: '2', image: person2 },
//   { index: '3', image: person3 },
// ];

const App = (): ReturnComponent => {
  return (
    <div className={style.appWrapper}>
      <div className={style.container}>
        <Substrate />
        <NavBar />
        <Main />
        <AboutUs />
        <Technologies />
        <Steps />
        <Asks />
        <Review />
        <Gallery />
        <ContactUs />
      </div>
    </div>
  );
};

export default App;
