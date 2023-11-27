
import { useEffect, useRef, useState } from 'react';
import add from '../../assets/images/add.png';
import subtract from '../../assets/images/subtraction.png'
import './RegisterPopUp.styles.css'

const RegisterPopUp = (props) => {
    const [numInputValue, setNumInputValue] = useState(1);
    const nameRef = useRef("");
    const phoneRef = useRef("");
    const typeRef = useRef("");
    const [isFormSubmited, setIsFormSubmited] = useState(false);
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
        const result = await response.json()
        console.log(result);
        setIsFormSubmited(true);
    }

    const clearForm = () => {
        nameRef.current.value = "";
        phoneRef.current.value = "";
        typeRef.current.value = "";
        setIsFormSubmited(false);
        setNumInputValue(1);
        props.HidePopUp();
    }

    const calcMaxDishes = () => {
        let maxDish = 1;
        if (isKosher) {
            maxDish = Number(props.availableCount);
        } else {
            maxDish = Number(props.availableCount) - Number(props.availableKosher);
            if(numInputValue > maxDish) {
                setNumInputValue(maxDish);

            }
        }
        return maxDish;
    }

    return (
        <>
            <div className='black-screen'>
                <div className='popup-container'>
                    <div onClick={() => clearForm() } className='close-btn'></div>
                    <form className={isFormSubmited ? 'hidden' : 'form-container'} onSubmit={formSubmit}>
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
                            <textarea ref={typeRef} resize="none" rows="2" cols="50" className='form-textarea' placeholder='פרטי על המנה'></textarea>
                        </div>
                        <div className='checkbox-container'>
                            כשר?
                            <input onChange={() => setIsKosher(!isKosher)} className='checkbox' type="checkbox" value="kosher" />
                        </div>
                        <div className='number-container'>
                            מספר המנות שתכיני:
                            <div className='number-controls'>
                                <img src={add} className={numInputValue < calcMaxDishes() ? 'number-controller' : 'number-controller gray'} onClick={() => { numInputValue < calcMaxDishes() ? setNumInputValue(numInputValue + 1) : null }} />
                                <input className='number-input' step="1" readOnly value={numInputValue} min="1" max="100" />
                                <img onClick={() => { numInputValue > 1 ? setNumInputValue(numInputValue - 1) : null }} src={subtract} className={numInputValue > 1 ? 'number-controller' : 'number-controller gray'} />
                            </div>
                        </div>
                        <span className='warning-kosher'>{numInputValue < 1 && !isKosher ? "ניתן להכין רק מנות כשרות!" : null}</span>
                        <button type="submit" className='register-btn popup-btn' disabled={numInputValue < 1}>הרשמה</button>
                    </form>
                    <div className={ isFormSubmited ? '' :
                     'hidden'}>
                        <h2 className='order-details-title pop-up-title'>{props.dishType}</h2>
                        <p className='confirmation-text'>נרשמת בהצלחה ל{numInputValue} מנות!</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RegisterPopUp
