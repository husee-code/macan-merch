import React, {useContext} from 'react';
import './MerchHeader.css';
import {CurrentThemeContext} from "../../shared/contexts.js";
import mBadgeImage from '@/assets/images/m-series-icon.png'

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
    const { currentPage, setCurrentPage } = useContext(CurrentThemeContext);
    const handleChangePage = (newPage) => {
        setCurrentPage(newPage);
    }
    return (
        <header>
            <div className="header-text">
                <img className="mBadge" src={mBadgeImage} alt="mBadge"/>
                <span className="title">MACAN</span>
            </div>
            <IconsRow/>
        </header>
    );
};

export default MerchHeader;