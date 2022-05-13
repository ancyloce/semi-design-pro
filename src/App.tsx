import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PageLayout from './layout/layout';

function App() {
    return (
        <Routes>
            <Route path="/" element={<PageLayout />} />
        </Routes>
    );
}

export default App;
