import React, { useState } from 'react';
import { IconMoon, IconSun } from '@douyinfe/semi-icons';
import { Button, Tooltip } from '@douyinfe/semi-ui';
import useLocale from '@/utils/useLocale';
import styles from './header.module.scss';

const body = document.body;

const Theme: React.FC = () => {
    const [mode, setMode] = useState<boolean>(body.hasAttribute('theme-mode'));
    const locale = useLocale();

    const switchMode = () => {
        if (mode) {
            body.removeAttribute('theme-mode');
        } else {
            body.setAttribute('theme-mode', 'dark');
        }
        setMode(body.hasAttribute('theme-mode'));
    };

    return (
        <Tooltip
            content={`${
                mode ? locale['layout.header.mode.light'] : locale['layout.header.mode.dark']
            }`}
        >
            <Button
                theme="borderless"
                icon={mode ? <IconSun size="large" /> : <IconMoon size="large" />}
                onClick={switchMode}
                className={styles.button}
            />
        </Tooltip>
    );
};

export default Theme;
