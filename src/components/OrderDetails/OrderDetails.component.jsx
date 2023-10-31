
import { useEffect, useRef } from 'react'
import './OrderDetails.styles.css'

const OrderDetails = (props) => {
    let date = new Date(props.date);

    const dateRef = useRef(` ${String(date.getDate()).padStart(2, "0")}/${String(date.getMonth() + 1).padStart(2, "0")}`);
    const timeRef = useRef(`${date.getHours()}:${String(date.getMinutes()).padStart(2, "0")}`);
    return (
        <div className='order-details'>
            <div onClick={() => props.closeDescription()} className='back-arrow'></div>
            <div className='order-container'>
                <h2 className='order-bar-text'>{props.orderType}</h2>
                {/* <p className='order-bar-text'>{dateRef.current}</p>
                <p className='order-bar-text'>{timeRef.current}</p> */}
                <div className='dish-details'>
                    <p>שניצלים</p>
                    <p>5</p>
                    <button className='register-btn'>הרשמה</button>
                </div>
                <div className='dish-details'>
                    <p>סלטים</p>
                    <p>4</p>
                    <button className='register-btn'>הרשמה</button>
                </div>
                <div className='dish-details'>
                    <p>עוגיות</p>
                    <p>15</p>
                    <button className='register-btn'>הרשמה</button>
                </div>
                <p>כתובת: {props.adress}</p>
            </div>

        </div>
    )
}

export default OrderDetails
