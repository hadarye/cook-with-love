import { useEffect, useRef, useState } from 'react'
import './Management.styles.css'
import OrderBar from '../OrderBar/OrderBar.component'
import OrderPage from '../OrderPage/OrderPage.component'

const Management = (props) => {
    const orderNames = {
        "cakes_and_snacks": "עוגות וחטיפים",
        "friday_dinner_cold": "ארוחת שישי קרה",
        "friday_dinner_hot": "ארוחת שישי חמה",
        "lunch_or_dinner_cold": "ארוחת צהררים / ערב קרה",
        "lunch_or_dinner_hot": "ארוחת צהריים / ערב חמה",
        "other": "אחר"

    }
    return (
        <>
            {/* <OrderPage  OrderList={props.OrderList}></OrderPage> */}
            {/* {props.OrderList.map((order) => (
                <OrderBar key={order.order_id} order={order} orderType={orderNames[order.order_type]} date={order.collecting_date} handleOrderPressed={handleOrderPressed}></OrderBar>
            ))} */}
            <form>
                <div>
                    שם המנהלת:
                    <input name='manager_name' placeholder='שם המנהלת'></input>
                </div>
                <div>
                    שם ההזמנה:
                    <input name='order_name' placeholder='שם ההזמנה'></input>
                </div>
                
                <input name='order_type' placeholder='סוג ההזמנה'></input>
                <input name='contact_name' placeholder='שם ליצירת קשר'></input>
                <input name='contact_phone' pattern='/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im' placeholder='טלפון ליצירת קשר'></input>
                <input type='datetime-local' name='collecting_date'></input>
                <input name='collecting_person_name' placeholder='שם המנהלת'></input>
                <input name='collecting_location' placeholder='כתובת לאיסוף'></input>
                <input name='collecting_person_phone' placeholder='מס׳ טלפון לאיסוף'></input>
                <input name='total'></input>
                <input name='total_kosher'></input>
                <input name='total_vegetarians'></input>
            </form>
        </>
    )
}

export default Management
