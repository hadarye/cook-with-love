
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
                    <div onClick={() => props.HidePopUp()} className='close-btn'></div>
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
                                <img src={add} className='number-controller' onClick={() => setNumInputValue(numInputValue + 1)}/>
                                <input className='number-input' type="number" step="1" value={numInputValue} min="1" max="100" />
                                <img  onClick={() => setNumInputValue(numInputValue - 1)} src={subtract} className='number-controller'/>
                            </div>
                        </div>

                        <button className='register-btn popup-btn'>הרשמה</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default RegisterPopUp
