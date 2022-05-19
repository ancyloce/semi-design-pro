import React from 'react';
import { Avatar, Layout, Nav } from '@douyinfe/semi-ui';
import { IconSemiLogo } from '@douyinfe/semi-icons';
import Theme from './Theme';
import Locale from './Locale';

function LayoutHeader() {
    const { Header } = Layout;

    return (
        <Header style={{ backgroundColor: 'var(--semi-color-bg-1)' }}>
            <div>
                <Nav mode="horizontal" defaultSelectedKeys={['Home']}>
                    <Nav.Header>
                        <IconSemiLogo style={{ width: '96px', height: '36px', fontSize: 36 }} />
                    </Nav.Header>
                    <Nav.Footer>
                        <Theme />
                        <Locale />
                        <Avatar color="orange" size="small">
                            YJ
                        </Avatar>
                    </Nav.Footer>
                </Nav>
            </div>
        </Header>
    );
}

export default LayoutHeader;
