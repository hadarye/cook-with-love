
import { useEffect, useRef, useState } from 'react';
import './MoreDetailsPopUp.styles.css'

const MoreDetailsPopUp = (props) => {

    console.log(props.meal);
    return (
        <div className='black-screen'>
            <div className='popup-container more-details'>
                <div onClick={() => props.HidePopUp()} className='close-btn'></div>
                <span className='collecting-details'>
                    <h4>פרטי האיסוף:</h4>
                    <div className='details-flex'>
                        <p>{props.meal.collecting_person_name}</p>
                        <p>{props.meal.collecting_date}</p>
                        <p>{props.meal.collecting_person_phone}</p>
                    </div>

                </span>
                <span className='more-detail-container'>
                    <h4>איש הקשר:</h4>
                    <div className='details-flex'>
                        <p>{props.meal.contact_name}</p>
                        <p>{props.meal.contact_phone}</p>
                    </div>
                </span>
                <span className='more-detail-container'>
                    <h4>שם המנהלת:</h4>
                    <p>{props.meal.manager_name}</p>
                </span>
                <span className='more-detail-container'>
                    <h4>מנות:</h4>
                    <div className='details-flex'>
                        <p>סה״כ: {props.meal.total}</p>
                        <p>כשרות: {props.meal.total_kosher}</p>
                        <p>טבעוניות: {props.meal.total_vegans}</p>
                        <p>צמחוניות: {props.meal.total_vegetarians}</p>
                    </div>
                </span>
                <span className='more-detail-container'>
                    <h4>הערות לגבי איסוף:</h4>
                    {props.meal.collecting_additional_info ? <p>{props.meal.collecting_additional_info}</p> : <p>אין.</p>}
                </span>
                <span className='more-detail-container'>
                    <h4>הערות כלליות:</h4>
                    {props.meal.comments ? <p>{props.meal.comments}</p> : <p>אין.</p>}
                </span>
                <span className='more-detail-container'>
                    <h4>סטטוס:</h4>
                    <p>{props.meal.status}</p>
                </span>
            </div>
        </div>

    )
}

export default MoreDetailsPopUp
