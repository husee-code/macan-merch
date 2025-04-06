import { useState } from 'react'
import './App.css'
import MainPage from "../pages/MainPage/MainPage.jsx";
import {CurrentThemeContext} from "../shared/contexts.js";
import MerchPage from "../pages/MerchPage/MerchPage.jsx";
import ForBroPage from "../pages/ForBroPage/ForBroPage.jsx";
import LifeStylePage from "../pages/LifeStylePage/LifeStylePage.jsx";
import ForSisPage from "@/pages/ForSisPage/ForSisPage.jsx";

export default function App() {
    const [currentPage, setCurrentPage] = useState('MainPage');

    return (
        <CurrentThemeContext.Provider value={{ currentPage, setCurrentPage }}>
            {currentPage === "MainPage" && <MainPage />}
            {currentPage === "MerchPage" && <MerchPage />}
            {currentPage === "ForBroPage" && <ForBroPage />}
            {currentPage === "ForSisPage" && <ForSisPage />}
            {currentPage === "LifeStylePage" && <LifeStylePage />}
            {currentPage === "ReleasesPage" && <MainPage />}
            {currentPage === "ContactsPage" && <MainPage />}
        </CurrentThemeContext.Provider>
    )
}

