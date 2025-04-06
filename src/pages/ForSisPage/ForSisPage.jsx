import React from 'react';
import MerchHeader from "../../widgets/MerchHeader/MerchHeader.jsx";
import "./ForSisPage.css"
import Image0 from '@/assets/images/scirena3.jpg'
import Image1 from '@/assets/images/headscarf2.webp'
import Image2 from '@/assets/images/floorskirt.webp'
import Image3 from '@/assets/images/w1.png'
import Image4 from '@/assets/images/m4.webp'


function PhotoItem({ src, header, description, objectPosition}) {
    return (
        <div className="info-item">
            <div className="media-container">
                <img src={src} alt="Item 1" style={{objectPosition: objectPosition}}/>
            </div>
            <h3>{header}</h3>
            <p>{description}</p>
        </div>
    );
}

function ForSisPage() {
    return (
        <div>
            <MerchHeader/>
            <div className="main-item">
                <img src={Image0} alt="Item 1" className="main-item-img"/>
                <div className="additional-text-item" style={{color: "lightgray"}}>
                    <p>
                        {"SIS ".repeat(1000)}
                    </p>
                </div>

                <div className="text-item">
                    <h3>For Sis</h3>
                    <p>High quality merch for true sis NOT from the streets.</p>
                </div>
            </div>
            <div className="items-row">
                <PhotoItem
                    src={Image1}
                    header="Headscarf"
                    description="Silk scarf"
                    objectPosition="-3rem"
                />
                <PhotoItem
                    src={Image2}
                    header="Floor-length skirt"
                    description="Cotton 100%"
                    objectPosition="-3rem"
                />
                <PhotoItem
                    src={Image3}
                    header="T-Shirt with print"
                    description="Cotton 100%"
                    objectPosition="-3rem"

                />
                <PhotoItem
                    src={Image4}
                    header="T-SHIRT XII"
                    description="Some description about this item."
                    objectPosition="-3rem -7rem"

                />
            </div>
            <div style={{height: '500px'}}></div>
        </div>
    );
}

export default ForSisPage;