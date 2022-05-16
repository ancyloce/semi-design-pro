import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { LocaleProvider } from '@douyinfe/semi-ui';
import PageLayout from './layout/layout';
import { GlobalContext } from './context';

function App() {
    const localeName = localStorage.getItem('lang') || 'en_US';
    const [locale, setLocale] = useState();

    async function fetchLocale(ln?: string) {
        const i18n = (await import(`./locale/${ln}.ts`)).default;
        setLocale(i18n);
    }

    useEffect(() => {
        fetchLocale(localeName);
    }, []);

    return (
        <LocaleProvider locale={locale}>
            <GlobalContext.Provider value={{ locale }}>
                <Routes>
                    <Route path="/" element={<PageLayout />} />
                </Routes>
            </GlobalContext.Provider>
        </LocaleProvider>
    );
}

export default App;
