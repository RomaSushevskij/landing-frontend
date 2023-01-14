import React from 'react';

import { Button } from 'components/generic/Button';
import { Heading } from 'components/generic/Heading';

import style from './App.module.scss';

import { Input } from 'components/generic/Input';
import { Paragraph } from 'components/generic/Paragraph';
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
    </div>
  );
};

export default App;
