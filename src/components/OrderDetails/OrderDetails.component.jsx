
import { useEffect, useRef, useState } from 'react'
import './OrderDetails.styles.css'
import RegisterPopUp from '../RegisterPopUp/RegisterPopUp.component';
import InfoPopUp from '../InfoPopUp/InfoPopUp.component';

const OrderDetails = (props) => {
    // const [orderObj, setOrderObj] = useState({});
    const [dishesArr, setDishesArr] = useState(props.dishes);
    const [isShowRegisterPopUp, setIsShowRegisterPopUp] = useState(false);
    const [isShowInfoPopUp, setIsShowInfoPopUp] = useState(false);
    const [chosenDish, setChosenDish] = useState({});

    let date = new Date(props.date);
    const dateRef = useRef(` ${String(date.getDate()).padStart(2, "0")}/${String(date.getMonth() + 1).padStart(2, "0")}`);
    const timeRef = useRef(`${date.getHours()}:${String(date.getMinutes()).padStart(2, "0")}`);

    const ShowRegisterPopUp = (dish) => {
        setChosenDish(dish);
        setIsShowRegisterPopUp(true);
    }

    const HidePopUp = () => {
        setIsShowRegisterPopUp(false);
        setIsShowInfoPopUp(false);
        getData();
    }

    const ShowInfoPopUp = (dish) => {
        setChosenDish(dish);
        setIsShowInfoPopUp(true);
    }

    async function getData() {
        let accumuletor = [];
        let orderObj = {};
        let response = await fetch("https://8nkv5zptli.execute-api.eu-west-1.amazonaws.com/dev/orders");
        let result = await response.json();
        for (let meal of result) {
            if(meal.order_id === props.orderId) {
               accumuletor.push(meal); 
            }  
        }
        orderObj = accumuletor[0];
        setDishesArr(orderObj.dishes);
    }

    return (
        <div className='order-details'>
            <div onClick={() => props.closeDescription()} className='back-arrow'></div>
            <h2 className='order-details-title'>{props.orderType}</h2>
            <div className='details-container'>
                <div className='details-top-bar'>
                    <div>מנה</div>
                    <div>הכל</div>
                    <div>כשרות</div>
                </div>
                <div className='order-container'>
                    {dishesArr.map((dish) => (
                        <div key={dish.type} className='dish-details'>
                            <p style={{ paddingLeft: "1.5rem" }}>{dish.type}</p>
                            <p>{dish.total_missing}</p>
                            <p>{dish.kosher_missing}</p>
                            {!props.isManager && dish.total_missing > 0 ? <button onClick={() => ShowRegisterPopUp(dish)} className='register-btn'>הרשמה</button> : null}
                            {props.isManager ? <button onClick={() => ShowInfoPopUp(dish)} className='register-btn'>פרטים</button> : null}
                        </div>
                    ))}
                </div>
            </div>
            <div className='order-details-subtitle'>
                <p className='subtitle-text'>{`${dateRef.current} ${timeRef.current}`}</p>
                <p className='subtitle-text'>כתובת: {props.adress}</p>
            </div>
            <div className={isShowRegisterPopUp ? " " : 'hidden'}>
                <RegisterPopUp availableCount={chosenDish.total_missing} dishType={chosenDish.type} HidePopUp={HidePopUp} order_Id={props.orderId}></RegisterPopUp>
            </div>
            <div className={isShowInfoPopUp ? "" : "hidden"}>
                <InfoPopUp dish={chosenDish} HidePopUp={HidePopUp} />
            </div>
        </div>
    )
}

export default OrderDetails
