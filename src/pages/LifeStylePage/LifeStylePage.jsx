import React from 'react';
import MerchHeader from "../../widgets/MerchHeader/MerchHeader.jsx";
import "./LifeStylePage.css"
import vid from '@/assets/images/macan-ride.mp4'
import Image1 from '@/assets/images/ants.jpg'
import Image2 from '@/assets/images/apple.jpg'
import Image3 from '@/assets/images/plates.jpg'
import Image4 from '@/assets/images/belt.jpg'


function PhotoItem({ src, header, description, objectPosition}) {
    return (
        <div className="info-item">
            <div className="media-container">
                <img src={src} alt="Item 1" style={{objectPosition: objectPosition}}/>
            </div>
            <h3>{header}</h3>
            <p style={{
                maxWidth: '282px',
                overflowWrap: 'break-word',
                whiteSpace: 'normal'
            }}>
                {description}
            </p>
        </div>
    );
}

function LifeStylePage() {
    return (<>
        <MerchHeader/>
        <div className='lifestyle-page'>
            <div className="main-item">
                <div className="main-item-video-wrapper">
                    <video src={vid} type="video/mp4" loop autoPlay muted>
                        Ваш браузер не поддерживает видео.
                    </video>
                </div>

                <div className="text-item">
                    <h3>DRIVE IN M5 WITH MACAN</h3>
                    <p style={{textAlign: 'center'}}>
                        30 minute drive around MKAD.<br/>
                        No speed limits.<br/>
                        No seatbelts.<br/>
                        No other music rather than MACAN.
                    </p>
                </div>
            </div>

            <p style={{
                width: '80%',
                marginRight: 'auto',
                marginLeft: 'auto',
                marginTop: '2rem',
                textAlign: 'center',
                fontSize: '24px',
                color: 'lightgray'
            }}>
                YOU MAY ALSO LIKE
            </p>

            <div className="items-row">
                <PhotoItem
                    src={Image1}
                    header="Atta Ant Farm"
                    description="Will you be able to see them teleport?"
                    objectPosition="-4rem -3rem"
                />
                <PhotoItem
                    src={Image2}
                    header="Green Apples"
                    description="Yes, the apple is, indeed, green."
                    objectPosition="0 -5rem"

                />
                <PhotoItem
                    src={Image3}
                    header="Flip-up plates"
                    description="No more fines on the MKAD."
                    objectPosition="-6rem -2rem"

                />
                <PhotoItem
                    src={Image4}
                    header="Fake Belt T-Shirt"
                    description="Always buckled up"
                    objectPosition="-3rem -7rem"

                />
            </div>
            <div style={{height: '500px'}}></div>
        </div>
    </>);
}

export default LifeStylePage;