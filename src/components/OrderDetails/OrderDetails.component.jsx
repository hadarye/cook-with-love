
import { useEffect, useRef, useState } from 'react'
import './OrderDetails.styles.css'

const OrderDetails = (props) => {
    const [dishesArr, setDishesArr] = useState([{}]);
    let date = new Date(props.date);
    const dateRef = useRef(` ${String(date.getDate()).padStart(2, "0")}/${String(date.getMonth() + 1).padStart(2, "0")}`);
    const timeRef = useRef(`${date.getHours()}:${String(date.getMinutes()).padStart(2, "0")}`);

    useEffect(() => {
        if (props.dishes === undefined) {
            setDishesArr([{}]);
        } else {
            setDishesArr(props.dishes);
        }

        console.log(props.dishes);
    }, [props.dishes]);

    return (
        <div className='order-details'>
            <div onClick={() => props.closeDescription()} className='back-arrow'></div>
            <h2 className='order-details-title'>{props.orderType}</h2>
            <div className='order-container'>
                {dishesArr.map((dish) => (
                    <div key={dish.type} className='dish-details'>
                        <p>{dish.type}</p>
                        <p>{dish.count}</p>
                        <button className='register-btn'>הרשמה</button>
                    </div>))}

            </div>
            <p>כתובת: {props.adress}</p>
        </div>
    )
}

export default OrderDetails
