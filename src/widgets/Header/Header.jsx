import React, {useContext} from 'react';
import './Header.css';
import {CurrentThemeContext} from "../../shared/contexts.js";




const Header = () => {
    const { currentPage, setCurrentPage } = useContext(CurrentThemeContext);
    const handleChangePage = (newPage) => {
        setCurrentPage(newPage);
    }
    return (
        <header className="header">
            <div className="container">
                <div className="logo">
                    LOGO
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