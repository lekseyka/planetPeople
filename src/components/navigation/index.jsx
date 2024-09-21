import React from 'react';
import styles from './styles.module.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHouse} from "@fortawesome/free-solid-svg-icons";

const Navigation = () => {
    return (
        <nav className={styles.navigation}>
            <FontAwesomeIcon icon={faHouse} />
            <FontAwesomeIcon icon={faHouse} />
            <FontAwesomeIcon icon={faHouse} />
            <FontAwesomeIcon icon={faHouse} />
            <FontAwesomeIcon icon={faHouse} />
            <FontAwesomeIcon icon={faHouse} />
            <FontAwesomeIcon icon={faHouse} />
        </nav>
    );
};

export default Navigation;