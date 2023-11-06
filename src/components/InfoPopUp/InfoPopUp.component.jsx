
import { useEffect, useRef, useState } from 'react';
import './InfoPopUp.styles.css'

const InfoPopUp = (props) => {
    // const [bakersArr, setBakersArr] = useState(props.dish["bakers"]);

    // useEffect(() => {
    //     setBakersArr(props.dish["bakers"]);
    // }, [props.dish]);
    return (

        <div className='black-screen'>
            <div className='popup-container'>
                <div onClick={() => props.HidePopUp()} className='close-btn'></div>
                <h2 className='order-details-title pop-up-title'>{props.dish.type}</h2>
                {props.dish["bakers"] === undefined ? null : props.dish["bakers"].map((baker) => (
                    <div key={baker.phone} className='baker-info'>
                        <div>
                            <p className='baker-info-text'>{baker.name}</p>
                            <p className='baker-info-text'>{baker.phone}</p>
                            <p className='baker-info-text'>{baker.dish_type}</p>
                        </div>
                        <p className='baker-info-text'>{baker.kosher ? "כשר" : "לא כשר"}</p>
                    </div>
                ))}
            </div>
        </div>

    )
}

export default InfoPopUp
