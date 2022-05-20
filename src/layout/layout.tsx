import React from 'react';
import { Breadcrumb, Layout } from '@douyinfe/semi-ui';
import { IconBytedanceLogo } from '@douyinfe/semi-icons';
import { Outlet } from 'react-router';
import Header from './header';
import Menu from './menu';

const PageLayout = () => {
    const { Footer, Content } = Layout;

    return (
        <Layout>
            <Header />
            <Layout>
                <Menu />
                <Content
                    style={{
                        padding: '24px',
                        backgroundColor: 'var(--semi-color-bg-0)',
                    }}
                >
                    <Breadcrumb
                        style={{
                            marginBottom: '24px',
                        }}
                        routes={['首页', '当这个页面标题很长时需要省略', '上一页', '详情页']}
                    />
                    <div
                        style={{
                            borderRadius: '10px',
                            border: '1px solid var(--semi-color-border)',
                            height: '376px',
                            padding: '32px',
                        }}
                    >
                        <Outlet />
                    </div>
                    <Footer
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            padding: '20px',
                            color: 'var(--semi-color-text-2)',
                            backgroundColor: 'rgba(var(--semi-grey-0), 1)',
                        }}
                    >
                        <span
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                            }}
                        >
                            <IconBytedanceLogo size="large" style={{ marginRight: '8px' }} />
                            <span>Copyright © 2019 ByteDance. All Rights Reserved. </span>
                        </span>
                        <span>
                            <span style={{ marginRight: '24px' }}>平台客服</span>
                            <span>反馈建议</span>
                        </span>
                    </Footer>
                </Content>
            </Layout>

        </Layout>
    );
};

export default PageLayout;
