
import { useEffect, useRef } from 'react'
import './NewOrderForm.styles.css'

const NewOrderForm = (props) => {
    const orderNamesRef = useRef({
        "cakes_and_snacks": "עוגות וחטיפים",
        "friday_dinner_cold": "ארוחת שישי קרה",
        "friday_dinner_hot": "ארוחת שישי חמה",
        "lunch_or_dinner_cold": "ארוחת צהררים / ערב קרה",
        "lunch_or_dinner_hot": "ארוחת צהריים / ערב חמה",
        "other": "אחר"
    });

    return (
        <div className='new-order'>
            <div onClick={() => props.closeNewOrder()} className='back-arrow'></div>
            <h2 className='order-details-title'>הזמנה חדשה</h2>
            <form>
                <div>
                    שם המנהלת:
                    <input name='manager_name' placeholder='שם המנהלת'></input>
                </div>
                <div>
                    שם ההזמנה:
                    <input name='order_name' placeholder='שם ההזמנה'></input>
                </div>
                <div>
                    סוג ההזמנה:
                    {/* {Object.keys(orderNamesRef.current).map((key, index) => ( */}
                        <input type='radio' name='order_type' id='cakes_and_snacks' value={"עוגות וחטיפים"}></input>
                        <input type='radio' name='order_type' id='cakes_and_snacks' value={"עוגות וחטיפים"}></input>
                        <input type='radio' name='order_type' id='cakes_and_snacks' value={"עוגות וחטיפים"}></input>
                        <input type='radio' name='order_type' id='cakes_and_snacks' value={"עוגות וחטיפים"}></input>
                        <input type='radio' name='order_type' id='cakes_and_snacks' value={"עוגות וחטיפים"}></input>
                    {/* ))}; */}
                    {/* <input type='radio' name='order_type' value={}></input> */}
                </div>

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
        </div>
    )
}

export default NewOrderForm
