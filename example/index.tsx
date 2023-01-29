import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {AbButton} from '../src';

const App = () => {
  return (
    <div>
      <AbButton>Clique aqui!</AbButton>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
