import { React, useEffect, useRef, useState } from 'react'
import './OrderPage.styles.css'
import OrderBar from '../OrderBar/OrderBar.component'
import OrderDetails from '../OrderDetails/OrderDetails.component'
import AddFormBtn from '../../assets/images/add-form.png'
import FilterBar from '../FilterBar/FilterBar.component'
import NewOrderForm from '../NewOrderForm/NewOrderForm.component'


const OrderPage = (props) => {
    const [showDescription, setShowDescription] = useState(false);
    const [newOrder, setNewOrder] = useState(false);
    const currentOrder = useRef({});
    const orderNames = {
        "cakes_and_snacks": "עוגות וחטיפים",
        "friday_dinner_cold": "ארוחת שישי קרה",
        "friday_dinner_hot": "ארוחת שישי חמה",
        "lunch_or_dinner_cold": "ארוחת צהריים / ערב קרה",
        "lunch_or_dinner_hot": "ארוחת צהריים / ערב חמה",
        "other": "אחר"
    }

    const handleOrderPressed = (order) => {
        console.log(order);
        currentOrder.current = order;
        setShowDescription(true);
    }

    const closeDescription = () => {
        setShowDescription(false);
        location.reload();
    }

    const closeNewOrder = () => {
        setNewOrder(false);
    }



    return (
        <div className='order-page'>
            <FilterBar filterOrderArr={props.filterOrderArr} />
            <div className='title-container'>
                <h1 className='title'>מבשלות אהבה</h1>
                <h4 className='secondary-title'>בתל מונד</h4>
            </div>
            <div className='order-bar-container'>
                {props.OrderList.map((order) => (
                    <OrderBar name={order.order_name} isPending={order.status} key={order.order_id} order={order} orderType={orderNames[order.order_type]} date={order.collecting_date} handleOrderPressed={handleOrderPressed}></OrderBar>
                ))}
            </div>
            {showDescription ?
                <OrderDetails isManager={props.isManager} orderId={currentOrder.current.order_id} dishes={currentOrder.current.dishes} adress={currentOrder.current.collecting_location} closeDescription={closeDescription} orderType={orderNames[currentOrder.current.order_type]} date={currentOrder.current.collecting_date}></OrderDetails>
                : null}
            {props.isManager ?
                <div>
                    <img src={AddFormBtn} className='add-form-btn' onClick={() => setNewOrder(true)} />
                    <h4 className='secondary-title management-title'>עמוד מנהלה</h4>
                </div>
                : null}
            {newOrder ?
                <NewOrderForm closeNewOrder={closeNewOrder}></NewOrderForm>
                : null}
        </div>
    )
}

export default OrderPage
