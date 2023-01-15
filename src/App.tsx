import React from 'react';

import KristinWatson from 'assets/images/mentors/KristinWatson.png';
import RobertFox from 'assets/images/mentors/RobertFox.png';
import WadeWarren from 'assets/images/mentors/WadeWarren.png';
import angular from 'assets/images/technologies/angular.png';
import js from 'assets/images/technologies/js.png';
import react from 'assets/images/technologies/react.png';
import vue from 'assets/images/technologies/vue.png';
import { Button } from 'components/generic/Button';
import { Heading } from 'components/generic/Heading';
import { Input } from 'components/generic/Input';

import style from './App.module.scss';

import { Paragraph } from 'components/generic/Paragraph';
import { MentorCard } from 'components/MentorCard';
import { TechnologyCard } from 'components/TechnologyCard';
import { ReturnComponent } from 'types';

const App = (): ReturnComponent => {
  return (
    <div style={{ margin: 100 }}>
      <div style={{ width: 497, marginBottom: 50 }}>
        <Button>Send</Button>
      </div>
      <div style={{ width: 497, marginBottom: 50 }}>
        <Input defaultValue="Name" />
      </div>
      <div>
        <Heading headingLevel="h4" customStyle={style.someTitle}>
          Best courses ever
        </Heading>
      </div>
      <div style={{ marginTop: 17, width: 382 }}>
        <Paragraph>
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
    </div>
  );
};

export default App;
