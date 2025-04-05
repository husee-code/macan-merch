import "./MerchPage.css";
import MerchHeader from "../../widgets/MerchHeader/MerchHeader.jsx";
import React, {useContext} from "react";
import forBroImage from "@/assets/images/for_bro.jpg";
import forSisImage from "@/assets/images/for_sis.jpg";
import bratVideo from "@/assets/images/brat.mp4";
import {CurrentThemeContext} from "@/shared/contexts.js";


function PhotoItem({ src, header, description, onClick}) {
    return (
        <div className="info-item" onClick={onClick}>
            <div className="media-container">
                <img src={src} alt="Item 1"/>
            </div>
            <h3>{header}</h3>
            <p>{description}</p>
        </div>
    );
}

function VideoItem({ src, header, description, onClick}) {
    return (
        <div className="info-item"  onClick={onClick}>
            <div className="media-container">
                <video src={src} type="video/mp4" loop autoPlay muted style={{objectPosition: "-6rem -13rem"}}>
                    Ваш браузер не поддерживает видео.
                </video>
            </div>
            <h3>{header}</h3>
            <p>{description}</p>
        </div>
    );
}

function InfoSection() {
    const { currentPage, setCurrentPage } = useContext(CurrentThemeContext);
    const handleChangePage = (newPage) => {
        setCurrentPage(newPage);
    }
    return (
        <div className="info-section">
            <PhotoItem
                src={forBroImage}
                header="FOR BRO"
                description="Some description about this item."
                onClick={()=>handleChangePage("ForBroPage")}
            />
            <PhotoItem
                src={forSisImage}
                header="FOR SIS"
                description="Some description about this item."
            />
            <VideoItem
                src={bratVideo}
                header="LIFESTYLE"
                description="Some description about this item."
            />
        </div>
    );
}

function MerchPage() {
    return (
        <div className="merchPage">
            <MerchHeader/>
            <InfoSection/>
        </div>
    );
}

export default MerchPage;
