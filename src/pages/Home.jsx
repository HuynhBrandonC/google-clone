import React from 'react';
import { Link } from 'react-router-dom';
import "./Home.css";
import AppsIcon from '@mui/icons-material/Apps';
import { Avatar, Icon } from '@mui/material';
import Search from '../components/Search';

const Home = () => {
    return (
        <div className="home">

            <div className="home__header">
                <div className="home__headerLeft">
                    <Link to="/about">About</Link>
                    <Link to="/store">Store</Link>
                </div>
                <div className="home__headerRight">
                    <Link to="/gmail">Gmail</Link>
                    <Link to="/images">Images</Link>
                    <AppsIcon />
                    <Avatar />
                </div>
            </div>

            <div className="home__body">
                <img src="https://cdn.vox-cdn.com/thumbor/p01ezbiuDHgRFQ-htBCd7QxaYxo=/0x105:2012x1237/1600x900/cdn.vox-cdn.com/uploads/chorus_image/image/47070706/google2.0.0.jpg" alt="" />
                <div className="home__inputContainer">
                    <Search  />
                </div>
            </div>
        </div>
    );
}

export default Home;
