import React from 'react';
import './MerchHeader.css';
import mBadgeImage from '@/assets/images/m-series-icon.png'
import {useNavigate} from "react-router-dom";

function IconsRow() {
    return (
        <div className="iconsRow">
            <i className="fa-solid fa-bell"></i>
            <i className="fa-solid fa-user"></i>
            <i className="fa-solid fa-heart"></i>
            <i className="fa-solid fa-cart-shopping"></i>
        </div>
    );
}


const MerchHeader = () => {
    const navigate = useNavigate();
    const handleChangePage = (newPage) => {
        navigate(`/`);
    }
    return (
        <header>
            <div className="header-text" onClick={() => handleChangePage("MainPage")}>
                <img className="mBadge" src={mBadgeImage} alt="mBadge"/>
                <span className="title">MACAN</span>
            </div>
            <IconsRow/>
        </header>
    );
};

export default MerchHeader;