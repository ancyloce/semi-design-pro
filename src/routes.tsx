import React from 'react';
import {
    IconChecklistStroked,
    IconElementStroked,
    IconModalStroked,
    IconRankingCardStroked,
    IconRowsStroked,
    IconTrueFalseStroked,
    IconUserCircleStroked,
    IconUserStroked,
} from '@douyinfe/semi-icons';

export const routes = [
    {
        name: 'menu.dashboard',
        key: 'dashboard',
        icon: <IconElementStroked />,
        children: [
            {
                name: 'menu.dashboard.workplace',
                key: 'dashboard/workplace',
                componentPath: 'workplace',
            },
            {
                name: 'menu.dashboard.monitor',
                key: 'dashboard/monitor',
                componentPath: 'monitor',
            },
        ],
    },
    {
        name: 'menu.list',
        key: 'list',
        icon: <IconChecklistStroked />,
        children: [
            {
                name: 'menu.list.searchTable',
                key: 'list/search-table',
                componentPath: 'search-table',
            },
            {
                name: 'menu.list.cardList',
                key: 'list/card',
                componentPath: 'card-list',
            },
        ],
    },
    {
        name: 'menu.form',
        key: 'form',
        icon: <IconRowsStroked />,
        children: [
            {
                name: 'menu.form.step',
                key: 'form/step',
                componentPath: 'step-form',
            },
            {
                name: 'menu.form.group',
                key: 'form/group',
                componentPath: 'group-form',
            },
        ],
    },
    {
        name: 'menu.profile',
        key: 'profile',
        icon: <IconUserCircleStroked />,
        children: [
            {
                name: 'menu.profile.basic',
                key: 'profile/basic',
                componentPath: 'basic-profile',
            },
        ],
    },
    {
        name: 'menu.visualization',
        key: 'visualization',
        icon: <IconRankingCardStroked />,
        children: [
            {
                name: 'menu.visualization.dataAnalysis',
                key: 'visualization/data-analysis',
                componentPath: 'data-analysis',
            },
            {
                name: 'menu.visualization.multiDimensionDataAnalysis',
                key: 'visualization/multi-dimension-data-analysis',
                componentPath: 'multi-dimension-data-analysis',
            },
        ],
    },
    {
        name: 'menu.result',
        key: 'result',
        icon: <IconModalStroked />,
        children: [
            {
                name: 'menu.result.success',
                key: 'result/success',
                componentPath: 'success',
            },
            {
                name: 'menu.result.error',
                key: 'result/error',
                componentPath: 'error',
            },
        ],
    },
    {
        name: 'menu.exception',
        key: 'exception',
        icon: <IconTrueFalseStroked />,
        children: [
            {
                name: 'menu.exception.403',
                key: 'exception/403',
                componentPath: '403',
            },
            {
                name: 'menu.exception.404',
                key: 'exception/404',
                componentPath: '404',
            },
            {
                name: 'menu.exception.500',
                key: 'exception/500',
                componentPath: '500',
            },
        ],
    },
    {
        name: 'menu.user',
        key: 'user',
        icon: <IconUserStroked />,
        children: [
            {
                name: 'menu.user.info',
                key: 'user/info',
                componentPath: 'user-info',
            },
            {
                name: 'menu.user.setting',
                key: 'user/setting',
                componentPath: 'user-setting',
            },
        ],
    },
];
