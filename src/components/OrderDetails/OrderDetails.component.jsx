
import { useEffect, useRef, useState } from 'react'
import './OrderDetails.styles.css'
import RegisterPopUp from '../RegisterPopUp/RegisterPopUp.component';

const OrderDetails = (props) => {
    const [dishesArr, setDishesArr] = useState(props.dishes);
    const [isShowPopUp, setIsShowPopUp] = useState(false);
    const [chosenDish, setChosenDish] = useState({});

    let date = new Date(props.date);
    const dateRef = useRef(` ${String(date.getDate()).padStart(2, "0")}/${String(date.getMonth() + 1).padStart(2, "0")}`);
    const timeRef = useRef(`${date.getHours()}:${String(date.getMinutes()).padStart(2, "0")}`);

    const ShowPopUp = (dish) => {
        setChosenDish(dish);
        setIsShowPopUp(true);
    }

    const HidePopUp = () => {
        setIsShowPopUp(false);
    }

    return (
        <div className='order-details'>
            <div onClick={() => props.closeDescription()} className='back-arrow'></div>
            <h2 className='order-details-title'>{props.orderType}</h2>
            <div className='details-container'>
                <div className='details-top-bar'>
                    <div>מנה</div>
                    <div>כמות</div>
                </div>
                <div className='order-container'>
                    {dishesArr.map((dish) => (
                        <div key={dish.type} className='dish-details'>
                            <p>{dish.type}</p>
                            <p>{dish.count}</p>
                            <button onClick={() => ShowPopUp(dish)} className='register-btn'>הרשמה</button>
                        </div>
                    ))}
                </div>
            </div>

            <p>כתובת: {props.adress}</p>

            <div className={isShowPopUp ? " " : 'hidden'}>
                <RegisterPopUp dishType={chosenDish.type} HidePopUp={HidePopUp}></RegisterPopUp>
            </div>

        </div>
    )
}

export default OrderDetails
