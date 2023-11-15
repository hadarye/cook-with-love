
import { useEffect, useRef, useState } from 'react'
import './SearchResults.styles.css'

const SearchResults = (props) => {
    const [userSearchedInput, setUserSearchedInput] = useState(props.userSearchedInput);
    useEffect(() => {
        console.log(userSearchedInput);
    }, [userSearchedInput]);
    console.log()
    return (
        <div className='order-details'>
            <h2 className='order-details-title search-result-title'>תוצאות חיפוש עבור "{props.userSearchedInput}"</h2>
        </div>
    )
}

export default SearchResults
