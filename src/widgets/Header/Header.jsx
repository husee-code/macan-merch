import React from 'react';
import './Header.css';
import mBadgeImage from "@/assets/images/m-series-icon.png";
import {useNavigate} from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();
    const handleChangePage = (newPage) => {
        navigate(`/${newPage}`);
    }
    return (
        <header className="header">
            <div className="container">
                <div className="header-text" style={{width: '200px', transform: 'scale(1.5)', marginLeft: '3rem',}}>
                    <img className="mBadge" src={mBadgeImage} alt="mBadge"/>
                    <span className="title">MACAN</span>
                </div>
                <nav className="nav">
                    <ul className="navList">
                        <li>
                            <p onClick={()=>handleChangePage("MerchPage")} className="navLink">Merch</p>
                        </li>

                        <li>
                            <p onClick={()=>handleChangePage("ReleasesPage")} className="navLink">Releases</p>
                        </li>

                        <li>
                            <p onClick={()=>handleChangePage("ConcertsPage")} className="navLink">Concerts</p>
                        </li>

                        <li>
                            <p onClick={()=>handleChangePage("ContactsPage")} className="navLink">Contacts</p>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;