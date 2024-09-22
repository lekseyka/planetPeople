import React from 'react';
import styles from './styles.module.scss';

const CustomList = ({children}) => {
    return (
        <ul className={styles.customList}>
            {children}
        </ul>
    );
};

export default CustomList;