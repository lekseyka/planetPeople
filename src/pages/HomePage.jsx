import React from 'react';
import {Container} from "react-bootstrap";
import ProfileCard from "../components/profileCard";
import ContentWrapper from "../components/contentWrapper";
import styles from './styles/homePage.module.scss';
import Navigation from "../components/navigation";

const HomePage = () => {
    return (
        <Container className={styles.contentWrapper}>
            <Navigation />
            <ContentWrapper>
                <ProfileCard></ProfileCard>
                <ProfileCard></ProfileCard>
                <ProfileCard></ProfileCard>
                <ProfileCard></ProfileCard>
                <ProfileCard></ProfileCard>
                <ProfileCard></ProfileCard>
                <ProfileCard></ProfileCard>
                <ProfileCard></ProfileCard>
                <ProfileCard></ProfileCard>
            </ContentWrapper>
        </Container>
    );
};

export default HomePage;