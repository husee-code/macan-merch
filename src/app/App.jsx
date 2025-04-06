import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import MainPage from "../pages/MainPage/MainPage.jsx";
import MerchPage from "../pages/MerchPage/MerchPage.jsx";
import ForBroPage from "../pages/ForBroPage/ForBroPage.jsx";
import LifeStylePage from "../pages/LifeStylePage/LifeStylePage.jsx";
import ForSisPage from "@/pages/ForSisPage/ForSisPage.jsx";
import ReleasesPage from "@/pages/ReleasesPage/ReleasesPage.jsx";

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MainPage />} />

                <Route path="/MerchPage" element={<MerchPage />} />
                <Route path="/ForBroPage" element={<ForBroPage />} />
                <Route path="/ForSisPage" element={<ForSisPage />} />
                <Route path="/LifeStylePage" element={<LifeStylePage />} />

                <Route path="/ReleasesPage" element={<ReleasesPage />} />
                <Route path="/ContactsPage" element={<MainPage />} />
            </Routes>
        </Router>
    );
}
