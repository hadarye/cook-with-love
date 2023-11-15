
import { useEffect, useRef, useState } from 'react'
import './FilterBar.styles.css'
import searchBtn from '../../assets/images/search.png'
import sliders from '../../assets/images/settings-sliders.png'
import SearchResults from '../SearchResults/SearchResults.component'

const FilterBar = (props) => {
    const [isSearch, setIsSearch] = useState(false);
    const search_input_ref = useRef();
    const [searchInputValue, setSearchInputValue] = useState("");
    const [showSearchResults, setShowSearchResults] = useState(false);

    const startSearch = () => {
        if (!isSearch) {
            setIsSearch(true);
        } else {
            if (search_input_ref.current.value !== "") {
                setSearchInputValue(search_input_ref.current.value);
                setShowSearchResults(true);
            }
        }
    }

    return (
        <>
            <div className='filter-bar'>
                <img className='filter-icon' src={sliders} />
                <div className={isSearch ? 'search' : 'search closed'}>
                    <input ref={search_input_ref} placeholder='חפשו לפי שם המבשלת...' className='search-bar' />
                    <img onClick={() => startSearch()} className='filter-icon search-icon' src={searchBtn} />
                </div>

            </div>
            {showSearchResults ? <SearchResults userSearchedInput={searchInputValue}></SearchResults> : null}
        </>

    )
}

export default FilterBar
