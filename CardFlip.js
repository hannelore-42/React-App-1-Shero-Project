
import React, { useState } from "react"
import ReactCardFlip from 'react-card-flip';
import FrontImgMediaCard from "./FrontImgMediaCard";
import ImgMediaCard from "./ImgMediaCard";
import "./ImgMediaCard.css";


export default function CardFlip (props) {

    const [isFlipped, setisFlipped] = useState(false);
    const handleClick = () => {
       setisFlipped(!isFlipped);
    };

        return (
            <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
                <div>
                    <li className="location-front-item" >
                    <FrontImgMediaCard name={props.name}  />
                <button className="button" onClick={handleClick}>Click Me</button>
                    </li>
                </div>
                <div>
                    <li className="location-back-item">
                    <ImgMediaCard name={props.name} bio={props.bio} image={props.image} onClick={handleClick} />
                    <button className="button" onClick={handleClick}>Click Me</button>
                    </li>
                </div>
            </ReactCardFlip>
        )
    }


