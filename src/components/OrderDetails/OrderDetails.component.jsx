
import { useEffect, useRef, useState } from 'react'
import './OrderDetails.styles.css'
import RegisterPopUp from '../RegisterPopUp/RegisterPopUp.component';

const OrderDetails = (props) => {
    const [dishesArr, setDishesArr] = useState([{}]);
    const [isShowPopUp, setIsShowPopUp] = useState(false);
    let date = new Date(props.date);
    const dateRef = useRef(` ${String(date.getDate()).padStart(2, "0")}/${String(date.getMonth() + 1).padStart(2, "0")}`);
    const timeRef = useRef(`${date.getHours()}:${String(date.getMinutes()).padStart(2, "0")}`);

    useEffect(() => {
        if (props.dishes === undefined) {
            setDishesArr([{}]);
        } else {
            setDishesArr(props.dishes);
        }
    }, [props.dishes]);

    const ShowPopUp = () => {
        setIsShowPopUp(true);
    }

    return (
        <div className='order-details'>
            <div onClick={() => props.closeDescription()} className='back-arrow'></div>
            <h2 className='order-details-title'>{props.orderType}</h2>
            <div className='order-container'>
                {dishesArr.map((dish) => (
                    <div key={dish.type} className='dish-details'>
                        <p>{dish.type}</p>
                        <p>{dish.count}</p>
                        <button onClick={() => ShowPopUp()} className='register-btn'>הרשמה</button>
                    </div>))}
            </div>
            <p>כתובת: {props.adress}</p>
            <div className={isShowPopUp ? " " : 'hidden'}>
                <RegisterPopUp></RegisterPopUp>
            </div>

        </div>
    )
}

export default OrderDetails
