
import { useEffect, useRef } from 'react'
import done from '../../assets/images/check.png';
import pending from '../../assets/images/clock.png';
import './OrderBar.styles.css'

const OrderBar = (props) => {
    let date = new Date(props.date);
    const dateRef = useRef(` ${String(date.getDate()).padStart(2, "0")}/${String(date.getMonth() + 1).padStart(2, "0")}`);
    const timeRef = useRef(`${date.getHours()}:${String(date.getMinutes()).padStart(2, "0")}`);

    return (
        
        <div className='order-bar' onClick={() => props.handleOrderPressed(props.order)}>
            {/* <img className='status-icon' src={props.isPending ? pending : done}></img> */}
            <h4>{props.name}</h4>
            <div className='bar-text-container'>
                <p className='order-bar-text'>{props.orderType}</p>
                <p className='order-bar-text'>{dateRef.current}</p>
                <p className='order-bar-text'>{timeRef.current}</p>
            </div>
        </div>
    )
}

export default OrderBar
