import { useRef, useState } from 'react'
import './OrderPage.styles.css'
import OrderBar from '../OrderBar/OrderBar.component'
import OrderDetails from '../OrderDetails/OrderDetails.component'


const OrderPage = () => {
    const [showDescription, setShowDescription] = useState(false);
    const currentOrder = useRef({});
    const OrderList = [
        {
            "manager_name": "Merav",
            "order_type": "ארוחת שישי קרה לחיל התותחנים",
            "contact_name": "Tahel",
            "contact_phone": "123",
            "collecting_date": "2023-11-11 11:11",
            "collecting_person_name": "שמחה",
            "collecting_location": "TBD",
            "collecting_person_phone": "456",
            "total": 40,
            "total_kosher": 5,
            "total_vegetarians": 3,
            "total_vegans": 1
        },
        {
            "manager_name": "Merav",
            "order_type": "ארוחת שבת קרה לשוטרים",
            "contact_name": "Tahel",
            "contact_phone": "123",
            "collecting_date": "2023-11-04 12:00",
            "collecting_person_name": "יפה",
            "collecting_location": "TBD",
            "collecting_person_phone": "456",
            "total": 40,
            "total_kosher": 5,
            "total_vegetarians": 3,
            "total_vegans": 1
        },
        {
            "manager_name": "Merav",
            "order_type": "ארוחת שישי חמה לחיל שיריון",
            "contact_name": "Tahel",
            "contact_phone": "123",
            "collecting_date": "2023-11-05 21:21",
            "collecting_person_name": "שרונה",
            "collecting_location": "TBD",
            "collecting_person_phone": "456",
            "total": 40,
            "total_kosher": 5,
            "total_vegetarians": 3,
            "total_vegans": 1
        },

    ]

    const handleOrderPressed = (order) => {
        console.log(order);
        currentOrder.current = order;
        setShowDescription(true);
    }

    const closeDescription = () => {
        setShowDescription(false);
    }

    return (
        <div className='order-page'>
            {OrderList.map((order) => (
                <OrderBar key={order.order_type} order={order} orderType={order.order_type} date={order.collecting_date} handleOrderPressed={handleOrderPressed}></OrderBar>
            ))}
            <div className={showDescription ? "" : "hidden"}>
                <OrderDetails closeDescription={closeDescription}></OrderDetails>
            </div>

        </div>
    )
}

export default OrderPage
