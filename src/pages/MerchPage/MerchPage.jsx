import "./MerchPage.css";
import MerchHeader from "../../widgets/MerchHeader/MerchHeader.jsx";
import React, {useState} from "react";
import forBroImage from "@/assets/images/for_bro.jpg";
import forSisImage from "@/assets/images/for_sis.jpg";
import bratVideo from "@/assets/images/brat.mp4";
import {useNavigate} from "react-router-dom";


function PhotoItem({ src, header, description, onClick, setCurrentItem, objectPosition}) {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <div
            className="info-item"
            onClick={onClick}
            onMouseEnter={()=> {
                setCurrentItem(true);
                setIsHovered(true);
            }}
            onMouseLeave={()=> {
                setCurrentItem(null);
                setIsHovered(false);
            }}
            style={{
                zIndex: isHovered ? 150 : "",
            }}
        >
            <div className="media-container">
                <img src={src} alt="Item 1" style={{
                    objectPosition: objectPosition,
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
                }}/>
            </div>
            <h3>{header}</h3>
            <p>{description}</p>
        </div>
    );
}

function VideoItem({ src, header, description, onClick, setCurrentItem}) {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <div
            className="info-item"
            onClick={onClick}
            onMouseEnter={() => {
                setCurrentItem(true);
                setIsHovered(true);
            }}
            onMouseLeave={() => {
                setCurrentItem(null);
                setIsHovered(false);
            }}
            style={{
                zIndex: isHovered ? 150 : ""
            }}
        >
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
    const [currentItem, setCurrentItem] = useState(null);
    const navigate = useNavigate();
    const handleChangePage = (newPage) => {
        navigate(`/${newPage}`);
    }
    return (<>
        <div className="light-wrapper"
             style={{
                 backgroundColor: 'rgba(0, 0, 0, 0.5)',
                 opacity: currentItem !== null ? '0.6' : '0'
            }}>
        </div>
        <div className="info-section" style={{width: '100%', height: '100%'}}>
            <PhotoItem
                src={forBroImage}
                header="FOR BRO"
                description="Some description about this item."
                onClick={() => handleChangePage("ForBroPage")}
                setCurrentItem={setCurrentItem}
                objectPosition="-1rem -3rem"
            />
            <PhotoItem
                src={forSisImage}
                header="FOR SIS"
                description="Some description about this item."
                onClick={() => handleChangePage("ForSisPage")}
                setCurrentItem={setCurrentItem}
            />
            <VideoItem
                src={bratVideo}
                header="LIFESTYLE"
                description="Some description about this item."
                onClick={() => handleChangePage("LifeStylePage")}
                setCurrentItem={setCurrentItem}
            />
        </div>
    </>);
}

function MerchPage() {
    return (<>
        <MerchHeader/>
        <div className="merchPage">
            <InfoSection/>
        </div>
    </> );
}

export default MerchPage;
