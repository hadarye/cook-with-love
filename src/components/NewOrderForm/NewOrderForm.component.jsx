
import { useEffect, useRef, useState } from 'react'
import './NewOrderForm.styles.css'

const NewOrderForm = (props) => {
    const orderNamesRef = useRef({
        "cakes_and_snacks": "עוגות וחטיפים",
        "friday_dinner_cold": "ארוחת שישי קרה",
        "friday_dinner_hot": "ארוחת שישי חמה",
        "lunch_or_dinner_cold": "ארוחת צהריים / ערב קרה",
        "lunch_or_dinner_hot": "ארוחת צהריים / ערב חמה",
        "other": "אחר"
    });
    const manager_name_ref = useRef("");
    const order_name_ref = useRef("");
    const [orderType, setOrderType] = useState("");
    const contact_name_ref = useRef("");
    const contact_phone_ref = useRef("");
    const isKosherRef = useRef(false);

    const formSubmit = async (e) => {
        e.preventDefault();
        const url = 'https://8nkv5zptli.execute-api.eu-west-1.amazonaws.com/dev/dishes/register';
        const objRegistration = {
            "order_id": String(props.order_Id),
            "baker_name": String(nameRef.current.value),
            "dish_type": String(props.dishType),
            "baker_phone": String(phoneRef.current.value),
            "baker_dish_type": String(typeRef.current.value),
            "baker_kosher": Boolean(isKosherRef.current),
            "number_of_dishes": Number(numInputValue)
        }
        console.log('registrasion ', objRegistration)
        const response = await fetch(url, {
            "method": "POST",
            body: JSON.stringify(objRegistration),
        });
        console.log('post completed');
        clearForm();
        const result = await response.json()
        console.log(result);
        console.warn('refresh')
    }

    const clearForm = () => {
        nameRef.current.value = "";
        phoneRef.current.value = "";
        typeRef.current.value = "";
        isKosherRef.current = false;
        setNumInputValue(1);
        props.HidePopUp();
    }
 
    return (
        <div className='new-order'>
            <div onClick={() => props.closeNewOrder()} className='back-arrow'></div>
            <h2 className='order-details-title'>הזמנה חדשה</h2>
            <form className='new-order-form' onSubmit={formSubmit}>
                <div className='form-inputs'>
                    <div className='order-inputs-container'>
                        שם המנהלת:
                        <input ref={manager_name_ref} type='text' name='manager_name' placeholder='שם המנהלת'></input>
                    </div>
                    <div className='order-inputs-container'>
                        שם ההזמנה:
                        <input ref={order_name_ref} type='text' name='order_name' placeholder='שם ההזמנה'></input>
                    </div>
                    <div className='order-inputs-container'>
                        סוג ההזמנה:
                        {Object.keys(orderNamesRef.current).map((key, index) => (
                            <div key={key}>
                                <input type='radio' name='order_type' id={key} value={key} onClick={() => setOrderType(key)}></input>
                                <label htmlFor={key}>{orderNamesRef.current[key]}</label>
                            </div>

                        ))}
                    </div>
                    <div className='order-inputs-container'>
                        שם ליצירת קשר:
                        <input type='text' name='contact_name' ref={contact_name_ref} placeholder='שם ליצירת קשר'></input>
                    </div>
                    <div className='order-inputs-container'>
                        טלפון ליצירת קשר:
                        <input type='text' name='contact_phone' ref={contact_phone_ref} pattern='/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im' placeholder='טלפון ליצירת קשר'></input>
                    </div>
                    <div className='order-inputs-container'>
                        תאריך איסוף:
                        <input type='datetime-local' name='collecting_date'></input>
                    </div>
                    <div className='order-inputs-container'>
                        שם המאסף:
                        <input type='text' name='collecting_person_name' placeholder='שם המאסף'></input>
                    </div>
                    <div className='order-inputs-container'>
                        כתובת לאיסוף:
                        <input type='text' name='collecting_location' placeholder='כתובת לאיסוף'></input>
                    </div>
                    <div className='order-inputs-container'>
                        מס׳ טלפון לאיסוף:
                        <input type='text' name='collecting_person_phone' placeholder='מס׳ טלפון לאיסוף'></input>
                    </div>
                    <div className='order-inputs-container'>
                        סה״כ מנות:
                        <input type='number' name='total'></input>
                    </div>
                    <div className='order-inputs-container'>
                        מתוכן מנות כשרות:
                        <input type='number' name='total_kosher'></input>
                    </div>
                    <div className='order-inputs-container'>
                        מתוכן צמחוניות:
                        <input type='number' name='total_vegetarians'></input>
                    </div>
                </div>
                <button className='register-btn' type='submit'>סיום</button>
            </form>
        </div>
    )
}

export default NewOrderForm
