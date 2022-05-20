import React from 'react';
import { IconLanguage } from '@douyinfe/semi-icons';
import { Button, Tooltip } from '@douyinfe/semi-ui';
import useLocale from '@/utils/useLocale';
import styles from './header.module.scss';

const options: any = {
    zh_CN: '中文',
    en_US: 'English',
};

const HeaderMode: React.FC = () => {
    const locale = useLocale();
    const localeName = localStorage.getItem('lang') || 'en_US';

    function onSwitchLocale() {
        localStorage.setItem('lang', localeName === 'en_US' ? 'zh_CN' : 'en_US');
        window.location.reload();
    }

    return (
        <Tooltip content={`${locale['layout.header.locale']}`}>
            <Button
                icon={<IconLanguage />}
                theme="borderless"
                className={styles.button}
                onClick={onSwitchLocale}
            >
                {options[localeName]}
            </Button>
        </Tooltip>
    );
};

export default HeaderMode;
