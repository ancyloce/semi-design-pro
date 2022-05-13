import React from 'react';
import ReactDOM from 'react-dom/client';
import { unstable_HistoryRouter as HistoryRouter } from 'react-router-dom';
import { LocaleProvider } from '@douyinfe/semi-ui';
import App from './App';
import reportWebVitals from './reportWebVitals';
import history from './history';
import US from './locale/en_US';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    // semi design is buggy, turn off strict mode temporarily
    // <React.StrictMode>
    <HistoryRouter history={history}>
        <LocaleProvider locale={US}>
            <App />
        </LocaleProvider>
    </HistoryRouter>
    // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
