import React from 'react';
import styles from './styles.module.scss';
import {Link} from "react-router-dom";
import Avatar from '../../img/profileAvatar/profileAvatar.png'

const ProfileCard = () => {
    return (
        <div className={styles.profileCard}>
            <img className={styles.cardImage} src={Avatar} alt="Фотография человека"/>
            <div className={styles.infoWrapper}>
                <Link to={'#'}>
                    <h4 className={styles.cardName}>Bryant Kobe</h4>
                    <div className={styles.nameLocalisation}>Bryant Kobe</div>
                </Link>

                <div className={styles.birthInfoWrapper}>
                    <span>1978 - 2020</span> <span className={styles.age}>(41 years)</span> <span>·</span> <span>United States</span>
                </div>
            </div>
        </div>
    );
};

export default ProfileCard;