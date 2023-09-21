import React, { useEffect, useMemo, useState } from 'react';
import {
    createBrowserRouter,
    createRoutesFromElements,
    Navigate,
    Route,
    RouterProvider,
} from 'react-router-dom';
import { LocaleProvider } from '@douyinfe/semi-ui';
import PageLayout from './layout/layout';
import { GlobalContext } from './context';
import LazyLoad from './utils/lazyload';
import { defaultRoute, routes } from './routes';

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

function Fallback() {
    return <p>Performing initial data load</p>;
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

    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<PageLayout />}>
                <Route index element={<Navigate to={`/${defaultRoute}`} replace />} />
                {flattenRoutes.map((route, index) => {
                    return (
                        <Route
                            key={index}
                            index={route?.index}
                            path={`/${route?.key}`}
                            element={route?.component}
                        />
                    );
                })}
            </Route>
        )
    );

    return (
        <LocaleProvider locale={locale}>
            <GlobalContext.Provider value={{ locale }}>
                <RouterProvider router={router} fallbackElement={<Fallback />} />
            </GlobalContext.Provider>
        </LocaleProvider>
    );
}

export default App;
