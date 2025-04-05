import "./MerchPage.css";
import MerchHeader from "../../widgets/MerchHeader/MerchHeader.jsx";
import React from "react";

function PhotoItem({ src, header, description}) {
    return (
        <div className="info-item">
            <div className="media-container">
                <img src={src} alt="Item 1"/>
            </div>
            <h3>{header}</h3>
            <p>{description}</p>
        </div>
    );
}

function VideoItem({ src, header, description}) {
    return (
        <div className="info-item">
            <div className="media-container">
                <video src={src} type="video/mp4" loop autoPlay muted>
                    Ваш браузер не поддерживает видео.
                </video>
            </div>
            <h3>{header}</h3>
            <p>{description}</p>
        </div>
    );
}

function InfoSection() {
    return (
        <div className="info-section">
            <PhotoItem
                src="/for_bro.jpg"
                header="FOR BRO"
                description="Some description about this item."
            />
            <PhotoItem
                src="/for_sis.jpg"
                header="FOR SIS"
                description="Some description about this item."
            />
            <VideoItem
                src="/brat.mp4"
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
