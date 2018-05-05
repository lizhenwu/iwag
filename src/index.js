import React from  'react';
import ReactDOM from 'react-dom';
import App from './app';
import {hot} from 'react-hot-loader';
import './button.less';

const HotApp = hot(module)(App);

ReactDOM.render(<HotApp />, document.getElementById('app'));