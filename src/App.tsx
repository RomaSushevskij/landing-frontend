import React, { useCallback, useState } from 'react';

import KristinWatson from 'assets/images/mentors/KristinWatson.png';
import RobertFox from 'assets/images/mentors/RobertFox.png';
import WadeWarren from 'assets/images/mentors/WadeWarren.png';
import angular from 'assets/images/technologies/angular.png';
import js from 'assets/images/technologies/js.png';
import react from 'assets/images/technologies/react.png';
import vue from 'assets/images/technologies/vue.png';
import { Accordion } from 'components/Accordion';
import { AccordionProps } from 'components/Accordion/types';
import { Button } from 'components/generic/Button';
import { Heading } from 'components/generic/Heading';
import { Input } from 'components/generic/Input';

import { v1 } from 'uuid';

import { Paragraph } from 'components/generic/Paragraph';
import { MentorCard } from 'components/MentorCard';
import { Slider } from 'components/Slider';
import { Stepper } from 'components/Stepper';
import { StepCard } from 'components/Stepper/StepCard';

import style from './App.module.scss';

import { Step } from 'components/Stepper/types';
import { TechnologyCard } from 'components/TechnologyCard';
import { ReturnComponent } from 'types';

const stepsTitles = ['Overview of Development', 'Introduction to Front-End'];
const stepsDescr = [
  'Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis.',
  'Lorem ipsum dolor sit amet consectetur.',
  'Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. Lorem ipsum dolor sit amet consectetur.',
  'Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis.Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis.Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis.',
  'Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. Lorem ipsum dolor sit amet consectetur.',
  'Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. Lorem ipsum dolor sit amet consectetur.',
  'Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis.Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis.Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis.',
];

const stepCount = 6;
const steps: Step[] = [...Array(stepCount)].map((_, index) => ({
  id: v1(),
  title: stepsTitles[index % stepsTitles.length],
  description: stepsDescr[index % stepsDescr.length],
}));

const accordionsSummary = ['What is the price?'];
const accordionsDetails = [
  'Front-end engineers work closely with designers to make websites beautiful, functional, and fast. This Career Path will teach you not only the necessary languages and technologies, but how to think like a front-end engineer, too. Front-end engineers work closely with designers to make websites beautiful, functional, and fast. This Career Path will teach you not only the necessary languages and technologies, but how to think like a front-end engineer, too.',
  'Front-end engineers work closely with designers to make websites beautiful, functional, and fast. This Career Path will teach you not only the necessary languages and technologies, but how to think like a front-end engineer, too.',
  'Front-end engineers work closely with designers to make websites beautiful, functional, and fast. This Career Path will teach you not only the necessary languages and technologies, but how to think like a front-end engineer, too. Front-end engineers work closely with designers to make websites beautiful, functional, and fast. This Career Path will teach you not only the necessary languages and technologies, but how to think like a front-end engineer, too.',
  'Front-end engineers work closely with designers to make websites beautiful, functional, and fast. This Career Path will teach you not only the necessary languages and technologies, but how to think like a front-end engineer, too.',
  'Front-end engineers work closely with designers to make websites beautiful, functional, and fast. This Career Path will teach you not only the necessary languages and technologies, but how to think like a front-end engineer, too.',
];

const accordionsCount = 5;

const accordions: (AccordionProps & { id: string })[] = [...Array(accordionsCount)].map(
  (_, index) => ({
    id: v1(),
    summary: accordionsSummary[index % accordionsSummary.length],
    details: accordionsDetails[index % accordionsDetails.length],
  }),
);

const App = (): ReturnComponent => {
  const [activeAccordionId, setActiveAccordionId] = useState(accordions[0].id);

  const onActiveAccordionIdChange = useCallback(
    (id: string): void => {
      if (activeAccordionId === id) {
        setActiveAccordionId('');

        return;
      }
      setActiveAccordionId(id);
    },
    [activeAccordionId, setActiveAccordionId],
  );

  return (
    <div style={{ margin: 50 }}>
      <div style={{ width: 497, marginBottom: 50 }}>
        <Button>Send</Button>
      </div>
      <div style={{ width: 497, marginBottom: 50 }}>
        <Input defaultValue="Name" />
      </div>
      <div>
        <Heading level="h4">Best courses ever</Heading>
      </div>
      <div style={{ marginTop: 17, width: 382 }}>
        <Paragraph level="p1">
          Good course, up to this point, still ongoing. The only downside, why I gave 4,5
          stars, because the teacher sometimes feel like, he is lost, and takes up quite a
          time, to correct himself, and check back etc.
        </Paragraph>
      </div>
      <div style={{ marginTop: 50, display: 'flex', gap: 30 }}>
        <MentorCard
          name="Wade Warren"
          image={WadeWarren}
          description="Front-end engineers work closely with designers"
          customImageStyle={style.wadeWarrenImage}
        />
        <MentorCard
          name="Kristin Watson"
          image={KristinWatson}
          description="Front-end engineers work closely with designers"
        />
        <MentorCard
          name="Robert Fox"
          image={RobertFox}
          description="Front-end engineers work closely with designers"
          customImageStyle={style.robertFoxImage}
        />
      </div>
      <div style={{ marginTop: 50, display: 'flex', gap: 30 }}>
        <TechnologyCard title="Angular" logo={angular} />
        <TechnologyCard title="React" logo={react} />
        <TechnologyCard title="Vue.js" logo={vue} />
        <TechnologyCard title="JavaScript" logo={js} />
      </div>
      <div
        style={{
          marginTop: 50,
          paddingBottom: 50,
          display: 'flex',
          flexDirection: 'column',
          gap: 30,
        }}
      >
        <StepCard
          stepNumber={1}
          title="Introduction to Front-End"
          description="Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis."
          sideFrame="right"
        />
        <StepCard
          stepNumber={2}
          title="Overview of Development"
          description="Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis."
          sideFrame="left"
        />
        <StepCard
          stepNumber={2}
          title="Overview of Development"
          description="Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis."
          sideFrame="right"
        />
      </div>
      <div style={{ marginTop: 50, paddingBottom: 50 }}>
        <Stepper steps={steps} />
      </div>
      <div style={{ marginTop: 50, paddingBottom: 50 }}>
        {accordions.map(({ id, summary, details }) => {
          return (
            <div key={id} style={{ marginBottom: 20 }}>
              <Accordion
                id={id}
                summary={summary}
                details={details}
                expanded={activeAccordionId === id}
                onChange={onActiveAccordionIdChange}
              />
            </div>
          );
        })}
      </div>
      <div style={{ marginTop: 50, paddingBottom: 50 }}>
        <Slider />
      </div>
      <div className={style.figure} />
    </div>
  );
};

export default App;
