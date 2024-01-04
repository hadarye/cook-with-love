
import { useEffect, useRef, useState } from 'react'
import './OrderDetails.styles.css'
import RegisterPopUp from '../RegisterPopUp/RegisterPopUp.component';
import InfoPopUp from '../InfoPopUp/InfoPopUp.component';
import MoreDetailsPopUp from '../MoreDetailsPopUp/MoreDetailsPopUp.component';
import checkbox from '../../assets/images/checkbox.svg'
import checkboxChecked from '../../assets/images/checkbox-checked.svg'

const OrderDetails = (props) => {
    // const [orderObj, setOrderObj] = useState({});
    const [dishesArr, setDishesArr] = useState(props.dishes);
    const [isShowRegisterPopUp, setIsShowRegisterPopUp] = useState(false);
    const [isShowInfoPopUp, setIsShowInfoPopUp] = useState(false);
    const [isShowMoreDetailsPopUp, setIsShowMoreDetailsPopUp] = useState(false);
    const [chosenDish, setChosenDish] = useState({});
    const [isFilterDishes, setIsFilterDishes] = useState(true);

    // fix date - to readable format
    let date = new Date(props.date);
    const dateRef = useRef(` ${String(date.getDate()).padStart(2, "0")}/${String(date.getMonth() + 1).padStart(2, "0")}`);
    const timeRef = useRef(`${date.getHours()}:${String(date.getMinutes()).padStart(2, "0")}`);

    useEffect(() => {
        getFilteredData();
    }, [])

    const ShowRegisterPopUp = (dish) => {
        setChosenDish(dish);
        setIsShowRegisterPopUp(true);
    }

    const HidePopUp = () => {
        setIsShowRegisterPopUp(false);
        setIsShowInfoPopUp(false);
        setIsShowMoreDetailsPopUp(false);
        isFilterDishes ? getFilteredData() : getData();
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
            if (meal.order_id === props.orderId) {
                accumuletor.push(meal);
            }
        }
        orderObj = accumuletor[0];
        setDishesArr(orderObj.dishes);
    }

    // filtering happeens in backend and is the default
    async function getFilteredData() {
        let accumuletor = [];
        let orderObj = {};
        let response = await fetch("https://8nkv5zptli.execute-api.eu-west-1.amazonaws.com/dev/orders?has_missing_dish=true");
        let result = await response.json();
        for (let meal of result) {
            if (meal.order_id === props.orderId) {
                accumuletor.push(meal);
            }
        }
        orderObj = accumuletor[0];
        setDishesArr(orderObj.dishes);
    }

    const handleFilterBtn = () => {
        if (isFilterDishes) {
            getData();
        } else {
            getFilteredData();
        }
        setIsFilterDishes(!isFilterDishes);
    }

    return (
        <div className='order-details-bg'>
            <div className='order-details'>
                <div className='top-details-container'>
                    <div onClick={() => props.closeDescription()} className='back-arrow'></div>
                    <div onClick={() => handleFilterBtn()} className='filter-container filter-details'>
                        <img className='filter-icon checkbox-icon' src={isFilterDishes ? checkboxChecked : checkbox} />
                        <p className='after-checkbox-text'>הצג רק מנות חסרות</p>
                    </div>
                </div>
                <div className='main-details-container'>
                    <h2 className='order-details-title'>{props.orderType}</h2>
                    <div className='details-container'>
                        <div className='details-top-bar'>
                            <div>מנה</div>
                            <div>הכל</div>
                            <div>מתוכן כשרות</div>
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
                    { props.isManager ? 
                        <button onClick={() => setIsShowMoreDetailsPopUp(true)} className='more-details-btn'>לפרטים נוספים</button>
                    :<div className='order-details-subtitle'>
                        <h4 id='collectorDetails' >פרטי המאסף:</h4>
                        <p id='collectorName' className='subtitle-text'>{props.collectorName}</p>
                        <p id='collectorPhone' className='subtitle-text'>{`${dateRef.current} ${timeRef.current}`}</p>
                        <p id='collectorAdress' className='subtitle-text'>{props.adress}</p>
                        <p id='collectorTime' className='subtitle-text'>{props.collectorPhone}</p>
                    </div>}
                    <div className={isShowRegisterPopUp ? " " : 'hidden'}>
                        <RegisterPopUp availableCount={chosenDish.total_missing} availableKosher={chosenDish.kosher_missing} dishType={chosenDish.type} HidePopUp={HidePopUp} order_Id={props.orderId}></RegisterPopUp>
                    </div>
                    <div className={isShowInfoPopUp ? "" : "hidden"}>
                        <InfoPopUp dish={chosenDish} HidePopUp={HidePopUp} />
                    </div>
                    <div className={isShowMoreDetailsPopUp ? "" : "hidden"}>
                       <MoreDetailsPopUp HidePopUp={HidePopUp} meal={props.currentOrder}></MoreDetailsPopUp> 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderDetails
