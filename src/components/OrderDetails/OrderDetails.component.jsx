
import { useEffect, useRef } from 'react'
import './OrderDetails.styles.css'

const OrderDetails = (props) => {

    return (
        <div className='order-details'>
            <div onClick={() => props.closeDescription()} className='back-arrow'>---</div>
        </div>
    )
}

export default OrderDetails
