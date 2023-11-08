import { useEffect, useRef, useState } from 'react'
import './Management.styles.css'
import OrderBar from '../OrderBar/OrderBar.component'
import OrderPage from '../OrderPage/OrderPage.component'

const Management = (props) => {
    const orderNames = {
        "cakes_and_snacks": "עוגות וחטיפים",
        "friday_dinner_cold": "ארוחת שישי קרה",
        "friday_dinner_hot": "ארוחת שישי חמה",
        "lunch_or_dinner_cold": "ארוחת צהריים / ערב קרה",
        "lunch_or_dinner_hot": "ארוחת צהריים / ערב חמה",
        "other": "אחר"

    }
    return (
        <>
            {/* <OrderPage  OrderList={props.OrderList}></OrderPage> */}
            {/* {props.OrderList.map((order) => (
                <OrderBar key={order.order_id} order={order} orderType={orderNames[order.order_type]} date={order.collecting_date} handleOrderPressed={handleOrderPressed}></OrderBar>
            ))} */}

        </>
    )
}

export default Management
