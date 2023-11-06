
import { useEffect, useRef } from 'react'
import './FilterBar.styles.css'
import searchBtn from '../../assets/images/search.png'
import sliders from '../../assets/images/settings-sliders.png'

const FilterBar = (props) => {
    
    return (
        <div className='filter-bar'>
            <img className='filter-icon' src={sliders}/>
            <img className='filter-icon' src={searchBtn}/>
        </div>
    )
}

export default FilterBar
