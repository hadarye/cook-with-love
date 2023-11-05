import { React, useEffect, useRef, useState } from 'react'
import './OrderPage.styles.css'
import OrderBar from '../OrderBar/OrderBar.component'
import OrderDetails from '../OrderDetails/OrderDetails.component'


const OrderPage = () => {
    const [showDescription, setShowDescription] = useState(false);
    const currentOrder = useRef({});
    const orderNames = {
        "cakes_and_snacks": "עוגות וחטיפים",
        "friday_dinner_cold": "ארוחת שישי קרה",
        "friday_dinner_hot": "ארוחת שישי חמה",
        "lunch_or_dinner_cold": "ארוחת צהררים / ערב קרה",
        "lunch_or_dinner_hot": "ארוחת צהריים / ערב חמה",
        "other": "אחר"

    }
    const [OrderList, setOrderList] = useState([]);

    // const OrderBreakdown = [
    //     {
    //         "שניצלים": "5",
    //         "סלטים": "4",
    //         "עוגיות": "15"
    //     },
    //     {
    //         "קציצות": "3",
    //         "פסטות": "14",
    //         "עוגות": "5"
    //     },
    //     {
    //         "ירקות": "8",
    //         "פירות": "7",
    //         "עוגיות": "15"
    //     }
    // ]

    const handleOrderPressed = (order) => {
        console.log(order);
        currentOrder.current = order;
        setShowDescription(true);
    }

    const closeDescription = () => {
        setShowDescription(false);
    }

    async function getData () {
        let accumuletor = []
        let response  = await fetch("https://8nkv5zptli.execute-api.eu-west-1.amazonaws.com/dev/orders");
        let result = await response.json();
        for (let meal of result) {
            accumuletor.push(meal);
        }
        setOrderList(accumuletor);
    }

    useEffect(() => {
        getData();
    }, [])

    return (
        <div className='order-page'>
            {OrderList.map((order) => (
                <OrderBar key={order.order_id} order={order} orderType={orderNames[order.order_type]} date={order.collecting_date} handleOrderPressed={handleOrderPressed}></OrderBar>
            ))}
            {showDescription ?
                <OrderDetails orderId={currentOrder.current.order_id} dishes={currentOrder.current.dishes} adress={currentOrder.current.collecting_location} closeDescription={closeDescription} orderType={orderNames[currentOrder.current.order_type]} date={currentOrder.current.collecting_date}></OrderDetails>
            : null}
        </div>
    )
}

export default OrderPage
