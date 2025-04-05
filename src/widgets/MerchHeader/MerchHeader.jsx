import React, {useContext} from 'react';
import './MerchHeader.css';
import {CurrentThemeContext} from "../../shared/contexts.js";


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
            <p className="title">MACAN</p>
            <IconsRow/>
        </header>
    );
};

export default MerchHeader;