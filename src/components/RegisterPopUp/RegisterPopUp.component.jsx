
import { useEffect, useRef, useState } from 'react';
import add from '../../assets/images/add.png';
import subtract from '../../assets/images/subtraction.png'
import './RegisterPopUp.styles.css'

const RegisterPopUp = (props) => {
    const [numInputValue, setNumInputValue] = useState(1);
    const nameRef = useRef("");
    const phoneRef = useRef("");
    const typeRef = useRef("");
    const [isKosher, setIsKosher] = useState(false);

    const formSubmit = async (e) => {
        e.preventDefault();

        const url = 'https://8nkv5zptli.execute-api.eu-west-1.amazonaws.com/dev/dishes/register';
        const objRegistration = {
            "order_id": String(props.order_Id),
            "baker_name": String(nameRef.current.value),
            "dish_type": String(props.dishType),
            "baker_phone": String(phoneRef.current.value),
            "baker_dish_type": String(typeRef.current.value),
            "baker_kosher": Boolean(isKosher),
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
        setNumInputValue(1);
        props.HidePopUp();
    }

    return (
        <>
            <div className='black-screen'>
                <div className='popup-container'>
                    <div onClick={() => clearForm() } className='close-btn'></div>
                    <form className='form-container' onSubmit={formSubmit}>
                        <h2 className='order-details-title pop-up-title'>{props.dishType}</h2>
                        <div className='input-container'>
                            שם מלא
                            <input ref={nameRef} required className='form-input' placeholder='הכניסי את שמך'></input>
                        </div>
                        <div className='input-container'>
                            מס׳ טלפון
                            <input ref={phoneRef} required className='form-input' placeholder='הכניסי את מס׳ הטלפון'></input>
                        </div>
                        <div className='input-container'>
                            מה תכיני?
                            <textarea ref={typeRef} resize="none" rows="3" cols="50" className='form-textarea' placeholder='פרטי על המנה'></textarea>
                        </div>
                        <div className='number-container'>
                            מספר המנות שתכיני:
                            <div className='number-controls'>
                                <img src={add}  className={numInputValue < props.availableCount ? 'number-controller' : 'number-controller gray'} onClick={() => { numInputValue < props.availableCount ? setNumInputValue(numInputValue + 1) : null }} />
                                <input className='number-input' step="1" readOnly value={numInputValue} min="1" max="100" />
                                <img onClick={() => { numInputValue > 1 ? setNumInputValue(numInputValue - 1) : null }} src={subtract} className={numInputValue > 1 ? 'number-controller' : 'number-controller gray'} />
                            </div>
                        </div>
                        <div className='checkbox-container'>
                            כשר?
                            <input onChange={() => setIsKosher(!isKosher)} className='checkbox' type="checkbox" value="kosher" />
                        </div>
                        <button type="submit" className='register-btn popup-btn'>הרשמה</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default RegisterPopUp
