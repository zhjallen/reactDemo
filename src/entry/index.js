import { AppContainer } from 'react-hot-loader';
import 'antd/dist/antd.css';
import React from 'react';
import ReactDOM from 'react-dom';
import '../utils/globals';
import App from '../router';


ReactDOM.render(
    <App />, document.getElementById('react-demo'),
);

if (module.hot) {
    module.hot.accept();
}
