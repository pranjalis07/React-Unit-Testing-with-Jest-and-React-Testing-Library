import React from 'react';
import FollowersList from '../FollowersList/FollowersList';
import Header from '../Header/Header';
import "./Followers.css";

const Followers: React.FC = () => {
    return (
        <div className="followers">
            <Header title="Followers" />
            <FollowersList />
        </div>
    );
};

export default Followers;
