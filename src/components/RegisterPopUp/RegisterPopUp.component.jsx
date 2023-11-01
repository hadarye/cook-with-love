
import { useEffect, useRef } from 'react'
import './RegisterPopUp.styles.css'

const RegisterPopUp = (props) => {

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
                            <input className='form-input' placeholder='פרטי על המנה'></input>
                        </div>
                        <input className='number-input' type="number" step="1" defaultValue="1" min="1" max="100" />
                        <button className='register-btn'>הרשמה</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default RegisterPopUp
