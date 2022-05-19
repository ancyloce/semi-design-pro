import { Layout, Nav } from '@douyinfe/semi-ui';
import { defaultRoute, routes } from '@/routes';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import useLocale from '@/utils/useLocale';

function LayoutMenu() {
    const [selectedKeys, setSelectedKeys] = useState<string[]>([defaultRoute]);
    const { Sider } = Layout;
    const navigate = useNavigate();
    const location = useLocation();
    const locale = useLocale();

    const getMenus: any = (data: any[]) => {
        return data?.map((item) => {
            return {
                itemKey: item.key,
                text: locale ? locale[item.name] || item.name : item.name,
                icon: item.icon,
                items: getMenus(item.children),
            };
        });
    };

    const onSelect = (key: number | string) => {
        if (key) {
            navigate(`${key}`, {});
            setSelectedKeys([`${key}`]);
        }
    };

    useEffect(() => {
        const { pathname } = location;
        setSelectedKeys([`${pathname}`.replace('/', '')]);
    }, [location]);

    return (
        <Sider style={{ backgroundColor: 'var(--semi-color-bg-1)' }}>
            <Nav
                style={{ maxWidth: 220, height: '100%' }}
                defaultSelectedKeys={selectedKeys}
                onSelect={({ itemKey, selectedKeys }) => {
                    console.log(selectedKeys);
                    onSelect(itemKey);
                }}
                limitIndent={false}
                items={getMenus(routes)}
                footer={{
                    collapseButton: true,
                }}
            />
        </Sider>
    );
}

export default LayoutMenu;
