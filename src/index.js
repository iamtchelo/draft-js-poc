import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Bootstrap from './Bootstrap';
import {ThemeProvider} from 'emotion-theming';
import theme from './theme';
import * as serviceWorker from './serviceWorker';

const App = () => (
  <ThemeProvider theme={theme}>
    <Bootstrap />
  </ThemeProvider>
);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
