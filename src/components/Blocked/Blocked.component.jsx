
import { useEffect, useRef, useState } from 'react'
import './Blocked.styles.css'
import blocked from '../../assets/images/tools.svg'

const Blocked = () => {


    return (
        <div className='blocked'>
            <img src={blocked}></img>
            <h2>עוד עובדות על זה...</h2>
            <p>האתר כרגע פעיל רק במכשירי טלפון. נסי לפתוח את אותו הקישור דרך הטלפון:)</p>
        </div>

    )
}

export default Blocked
