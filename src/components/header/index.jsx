import React from 'react';
import styles from './styles.module.scss';
import {Container} from "react-bootstrap";
import {Link} from "react-router-dom";
import Logo from './logo/logo.png';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass, faUser} from "@fortawesome/free-solid-svg-icons";
import clsx from "clsx";

const Header = () => {
    return (
        <header>
            <Container className={styles.headerWrapper}>
                <Link to={'/'}>
                    <img className={styles.mainLogo} src={Logo} alt=""/>
                </Link>
                <div className={styles.lineWrapper}>
                    <div className={clsx("input-group", styles.searchInput)}>
                        <input placeholder={'RIPPLANET Search'} type="text" className="form-control" aria-label="Sizing example input"
                               aria-describedby="inputGroup-sizing-default"/>
                        <span className="input-group-text" id="inputGroup-sizing-default"><FontAwesomeIcon icon={faMagnifyingGlass} /></span>
                    </div>
                    <div className={styles.uiWrapper}>
                        <div className={styles.item}>
                            EN
                        </div>
                        <div className={styles.item}>
                            <FontAwesomeIcon className={'fa-regular'} icon={faUser}/>
                        </div>
                    </div>
                </div>
            </Container>
        </header>
    );
};

export default Header;