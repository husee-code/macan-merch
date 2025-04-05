import React from 'react';
import MerchHeader from "../../widgets/MerchHeader/MerchHeader.jsx";
import "./ForBroPage.css"


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
                <img src="/for_bro.jpg" alt="Item 1" className="main-item-img"/>
                <div className="additional-text-item">
                    <h3>Additional Text Item</h3>
                    <p>Some description about this item.</p>
                </div>
                <div className="text-item">
                    <h3>Main Item</h3>
                    <p>Some description about this item.</p>
                </div>
            </div>
            <div className="items-row">
                <PhotoItem
                    src="/m1_1.png"
                    header="T-SHIRT WITH PRINT"
                    description="Cotton 100%"
                    objectPosition="-3rem"
                />
                <PhotoItem
                    src="/m2.png"
                    header="Hoodie"
                    description="Cotton 100%"
                    objectPosition="-3rem"

                />
                <PhotoItem
                    src="/m3.png"
                    header="Back Print Hoodie"
                    description="Some description about this item."
                    objectPosition="-3rem"

                />
                <PhotoItem
                    src="/m4.webp"
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