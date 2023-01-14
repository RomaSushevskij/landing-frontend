import React from 'react';

import './App.css';
import { Button } from 'components/generic/Button';
import { ReturnComponentType } from 'types';

const App = (): ReturnComponentType => {
  return (
    <div style={{ margin: 100 }}>
      <div style={{ width: 288, marginBottom: 50 }}>
        <Button disabled>Send</Button>
      </div>
    </div>
  );
};

export default App;
