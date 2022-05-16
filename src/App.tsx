import React, { useEffect, useMemo, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { LocaleProvider } from '@douyinfe/semi-ui';
import PageLayout from './layout/layout';
import { GlobalContext } from './context';
import LazyLoad from './utils/lazyload';
import { routes } from './routes';

//  Generate routes
function getFlattenRoutes() {
    const res: any[] = [];

    function travel(_routes: any) {
        _routes.forEach((route: any) => {
            if (route.componentPath) {
                route.component = <LazyLoad component={route?.componentPath} />;
                res.push(route);
            } else if (route?.children?.length) {
                travel(route.children);
            }
        });
    }

    travel(routes);
    return res;
}

function App() {
    const [locale, setLocale] = useState();
    const localeName = localStorage.getItem('lang') || 'en_US';
    const flattenRoutes = useMemo(() => getFlattenRoutes() || [], []);

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
                    <Route path="/" element={<PageLayout />}>
                        {flattenRoutes.map((route, index) => {
                            return (
                                <Route
                                    key={index}
                                    path={`/${route.key}`}
                                    element={route.component}
                                />
                            );
                        })}
                    </Route>
                </Routes>
            </GlobalContext.Provider>
        </LocaleProvider>
    );
}

export default App;
