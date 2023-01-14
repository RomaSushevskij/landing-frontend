import React from 'react';

import './App.css';
import { Button } from 'components/generic/Button';
import { Input } from 'components/generic/Input';
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
    </div>
  );
};

export default App;
