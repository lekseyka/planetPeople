import React from 'react';
import styles from "./styles/pages.module.scss";
import pageStyles from './styles/profilePage.module.scss';
import Navigation from "../components/navigation";
import ContentWrapper from "../components/contentWrapper";
import {Container} from "react-bootstrap";
import CustomList from "../components/customList";
import {faHouse} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const ProfilePage = () => {
    return (
        <Container className={styles.contentWrapper}>
            <Navigation />
            <ContentWrapper>
                <div>
                    <div className={pageStyles.listTitle}>Main</div>
                    <CustomList>
                        <li><span><FontAwesomeIcon icon={faHouse}/></span>Edit profile</li>
                        <li><span><FontAwesomeIcon icon={faHouse}/></span>Created profiles</li>
                        <li><span><FontAwesomeIcon icon={faHouse}/></span>Payment</li>
                        <li><span><FontAwesomeIcon icon={faHouse}/></span>Order history</li>
                        <li><span><FontAwesomeIcon icon={faHouse}/></span>Edit profile</li>
                    </CustomList>
                    <div className={pageStyles.listTitle}>Settings</div>
                    <CustomList>
                        <li><span><FontAwesomeIcon icon={faHouse}/></span>Notifications</li>
                        <li><span><FontAwesomeIcon icon={faHouse}/></span>Language</li>
                        <li><span><FontAwesomeIcon icon={faHouse}/></span>Info</li>
                        <li><span><FontAwesomeIcon icon={faHouse}/></span>Black list</li>
                        <li><span><FontAwesomeIcon icon={faHouse}/></span>Feedback</li>
                    </CustomList>
                    <CustomList>
                        <li><span><FontAwesomeIcon icon={faHouse}/></span>Log out</li>
                    </CustomList>
                </div>
                <div className={pageStyles.rightSide}>
                    <div className={pageStyles.listTitle}>Name</div>
                    <CustomList>
                        <li>User User</li>
                    </CustomList>
                    <div className={pageStyles.listTitle}>Contact information</div>
                    <CustomList>
                        <li>Email</li>
                        <li>Phone</li>
                    </CustomList>
                    <div className={pageStyles.listTitle}>User name</div>
                    <CustomList>
                        <li>Pylesos3000Turbo</li>
                    </CustomList>
                    <div className={pageStyles.listTitle}>Password</div>
                    <CustomList>
                        <li>• • • • • • • •</li>
                    </CustomList>
                </div>
            </ContentWrapper>
        </Container>
    );
};

export default ProfilePage;