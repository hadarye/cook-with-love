
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
    const order_type_ref = useRef("");
    const contact_name_ref = useRef("");
    const collecting_date_ref = useRef("");
    const collecting_person_name_ref = useRef("");
    const collecting_location_ref = useRef("");
    const collecting_person_phone_ref = useRef("");
    const contact_phone_ref = useRef("");
    const total_ref = useRef("");
    const total_kosher_ref = useRef("");
    const total_vegetarians_ref = useRef("");
    const total_vegan_ref = useRef("");
    const comments_ref = useRef("");
    const collecting_additional_info_ref = useRef("");

    const formSubmit = async (e) => {
        e.preventDefault();
        try {
            const url = 'https://8nkv5zptli.execute-api.eu-west-1.amazonaws.com/dev/orders/create';
            const objNewOrder = {
                "manager_name": String(manager_name_ref.current.value),
                "order_name": String(order_name_ref.current.value),
                "order_type": String(order_type_ref.current),
                "contact_name": String(contact_name_ref.current.value),
                "contact_phone": String(contact_phone_ref.current.value),
                "collecting_date": String(collecting_date_ref.current.value),
                "collecting_person_name": String(collecting_person_name_ref.current.value),
                "collecting_location": String(collecting_location_ref.current.value),
                "collecting_person_phone": String(collecting_person_phone_ref.current.value),
                "total": Number(total_ref.current.value),
                "total_kosher": Number(total_kosher_ref.current.value),
                "total_vegetarians": Number(total_vegetarians_ref.current.value),
                "total_vegans": Number(total_vegan_ref.current.value),
                "comments": String(comments_ref.current.value),
                "collecting_additional_info": String(collecting_additional_info_ref.current.value)
            }
            console.log('registrasion ', objNewOrder);

            const response = await fetch(url, {
                "method": "POST",
                body: JSON.stringify(objNewOrder),
            });
            console.log('post completed');
        } catch (err) {
            console.log(err.message);
        }
        props.HidePopUp();
        const result = await response.json()
        console.log(result);
        // location.reload();
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
        <div className='order-details-bg'>
            <div className='new-order'>
                <div onClick={() => props.closeNewOrder()} className='back-arrow'></div>
                <h2 className='order-details-title'>הזמנה חדשה</h2>
                <form className='new-order-form' onSubmit={formSubmit}>
                    <div className='form-inputs details-container'>
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
                                    <input type='radio' name='order_type' id={key} value={key} onClick={() => order_type_ref.current = key}></input>
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
                            <input type='text' name='contact_phone' ref={contact_phone_ref} placeholder='טלפון ליצירת קשר'></input>
                        </div>
                        <div className='order-inputs-container'>
                            תאריך איסוף:
                            <input type='datetime-local' name='collecting_date' ref={collecting_date_ref}></input>
                        </div>
                        <div className='order-inputs-container'>
                            שם המאסף:
                            <input type='text' name='collecting_person_name' placeholder='שם המאסף' ref={collecting_person_name_ref}></input>
                        </div>
                        <div className='order-inputs-container'>
                            כתובת לאיסוף:
                            <input type='text' name='collecting_location' placeholder='כתובת לאיסוף' ref={collecting_location_ref}></input>
                        </div>
                        <div className='order-inputs-container'>
                            מס׳ טלפון לאיסוף:
                            <input type='text' name='collecting_person_phone' placeholder='מס׳ טלפון לאיסוף' ref={collecting_person_phone_ref}></input>
                        </div>
                        <div className='order-numbers-container'>
                            סה״כ מנות:
                            <input type='number' name='total' ref={total_ref}></input>
                        </div>
                        <div className='order-numbers-container'>
                            מתוכן מנות כשרות:
                            <input type='number' name='total_kosher' ref={total_kosher_ref}></input>
                        </div>
                        <div className='order-numbers-container'>
                            מתוכן צמחוניות:
                            <input type='number' name='total_vegetarians' ref={total_vegetarians_ref}></input>
                        </div>
                        <div className='order-numbers-container'>
                            מתוכן טבעוניות:
                            <input type='number' name='total_vegan' ref={total_vegan_ref}></input>
                        </div>
                        <div className='order-inputs-container'>
                            הערות:
                            <textarea name='comments' ref={comments_ref} resize="none" rows="3" cols="50" placeholder='חשוב לדעת...'></textarea>
                        </div>
                        <div className='order-inputs-container'>
                            פרטי האיסוף:
                            <textarea name='collecting_additional_info' ref={collecting_additional_info_ref} resize="none" rows="3" cols="50" placeholder='כתבי פרטים נוספים'></textarea>
                        </div>
                    </div>
                    <button className='register-btn' type='submit'>סיום</button>
                </form>
            </div>
        </div>
    )
}

export default NewOrderForm
