
import { useEffect, useRef, useState } from 'react';
import add from '../../assets/images/add.png';
import subtract from '../../assets/images/subtraction.png'
import './RegisterPopUp.styles.css'

const RegisterPopUp = (props) => {
    const [numInputValue, setNumInputValue] = useState(1);
    return (
        <>
            <div className='black-screen'>
                <div className='popup-container'>
                    <div onClick={() => { setNumInputValue(1); props.HidePopUp() }} className='close-btn'></div>
                    <form className='form-container'>
                        <h2 className='order-details-title pop-up-title'>{props.dishType}</h2>
                        <div className='input-container'>
                            שם מלא
                            <input className='form-input' placeholder='הכניסי את שמך'></input>
                        </div>
                        <div className='input-container'>
                            מס׳ טלפון
                            <input className='form-input' placeholder='הכניסי את מס׳ הטלפון'></input>
                        </div>
                        <div className='input-container'>
                            מה תכיני?
                            <textarea resize="none" rows="3" cols="50" className='form-textarea' placeholder='פרטי על המנה'></textarea>
                        </div>
                        <div className='number-container'>
                            מספר המנות שתכיני:
                            <div className='number-controls'>
                                <img src={add} className='number-controller' onClick={() => { numInputValue < props.availableCount ? setNumInputValue(numInputValue + 1) : null }} />
                                <input className='number-input' step="1" readOnly value={numInputValue} min="1" max="100" />
                                <img onClick={() => { numInputValue > 1 ? setNumInputValue(numInputValue - 1) : null }} src={subtract} className='number-controller' />
                            </div>
                        </div>
                        <div className='checkbox-container'>
                            כשר?
                            <input className='checkbox' type="checkbox" value="kosher"/>
                        </div>
                        <button type="button" className='register-btn popup-btn'>הרשמה</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default RegisterPopUp
