
import { useEffect, useRef, useState } from 'react'
import './FilterBar.styles.css'
import searchBtn from '../../assets/images/search.png'
import checkbox from '../../assets/images/checkbox.svg'
import checkboxChecked from '../../assets/images/checkbox-checked.svg'
import SearchResults from '../SearchResults/SearchResults.component'

const FilterBar = (props) => {
    const [isSearch, setIsSearch] = useState(false);
    const search_input_ref = useRef();
    const [isFilterOn, setIsFilterOn] = useState(false);
    const [searchInputValue, setSearchInputValue] = useState("");
    const [showSearchResults, setShowSearchResults] = useState(false);

    const startSearch = () => {
        if (!isSearch) {
            setIsSearch(true);
        } else {
            if (search_input_ref.current.value !== "") {
                setSearchInputValue(search_input_ref.current.value);
                setShowSearchResults(true);
            } else {
                setIsSearch(false);
            }
        }
    }

    const closeSearch = () => {
        search_input_ref.current.value === "";
        setShowSearchResults(false);
    }

    return (
        <>
            <div className='filter-bar'>
                <div onClick={() => { setIsFilterOn(!isFilterOn); props.filterOrderArr() }} className='filter-container'>
                    {props.isManager ?
                        <div className='checkbox-filter-container'>
                            {/* <img className='filter-icon checkbox-icon' src={isFilterOn ? checkboxChecked : checkbox} />
                            <p className='after-checkbox-text'>רק פעילות</p> */}
                        </div> : null}
                </div>
                <div className={isSearch ? 'search' : 'search closed'}>
                    <input ref={search_input_ref} placeholder='חפשו לפי שם המבשלת...' className='search-bar' onKeyPress={(e) => { e.key === "Enter" ? startSearch() : null }} />
                    <img onClick={() => startSearch()} className='filter-icon search-icon' src={searchBtn} />
                </div>

            </div>
            {showSearchResults ? <SearchResults closeSearch={closeSearch} userSearchedInput={searchInputValue}></SearchResults> : null}
        </>

    )
}

export default FilterBar
