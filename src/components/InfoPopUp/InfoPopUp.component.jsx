
import { useEffect, useRef, useState } from 'react';
import './InfoPopUp.styles.css'

const InfoPopUp = (props) => {
    const [filteredBakersArr, setFilteredBakersArr] = useState([{}]);
    const initialValue = [{}];

    useEffect(() => {
        if (props.dish["bakers"] !== undefined) {
            let bakersArr = props.dish["bakers"];
            const filterBakers = bakersArr.reduce(
                (accumulator, currentValue) => {
                    if (accumulator.at(-1)["dish_type"] === currentValue["dish_type"]) {
                        if (typeof (accumulator.at(-1).counter) !== "number") {
                            accumulator.at(-1).counter = 1;
                        } else {
                            accumulator.at(-1).counter++;
                            // console.log(accumulator);
                        }
                        return accumulator;
                    } else {
                        return [...accumulator, currentValue];
                    }
                },
                initialValue,
            );
            filterBakers.splice(0, 1);
            setFilteredBakersArr(filterBakers);
        }

    }, [props.dish]);




    return (

        <div className='black-screen'>
            <div className='popup-container info-popup'>
                <div onClick={() => props.HidePopUp()} className='close-btn'></div>
                <h2 className='order-details-title pop-up-title'>{props.dish.type}</h2>
                {filteredBakersArr === undefined ? null : filteredBakersArr.map((baker) => (
                    <div key={baker.index} className='baker-info'>
                        <p className='baker-info-number'>{typeof (baker.counter) === "number" ? baker.counter : 1}</p>
                        <div>
                            <p className='baker-info-text'>{baker.name}</p>
                            <p className='baker-info-text'>{baker.phone}</p>
                            <p className='baker-info-text'>{baker.dish_type}</p>
                        </div>
                        <p className='baker-info-kosher'>{baker.kosher ? "כשר" : "לא כשר"}</p>
                    </div>
                ))}
                {filteredBakersArr.length === 0 ?
                    <div className='baker-info-text' style={{marginRight: "2rem"}}>אין נרשמים להזמנה זו.</div>
                    : null}
            </div>
        </div>

    )
}

export default InfoPopUp
