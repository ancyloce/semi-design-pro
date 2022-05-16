import { useContext } from 'react';
import { GlobalContext } from '../context';

export default () => {
    const { locale } = useContext(GlobalContext);
    return locale;
};
