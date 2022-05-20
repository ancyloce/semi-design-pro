import React from 'react';
import ReactDOM from 'react-dom/client';
import { unstable_HistoryRouter as HistoryRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import { createBrowserHistory } from 'history';
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
const history = createBrowserHistory({ window });

root.render(
    <React.StrictMode>
        <HistoryRouter history={history}>
            <App />
        </HistoryRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
