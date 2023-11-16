
import { useEffect, useRef, useState } from 'react'
import './SearchResults.styles.css'

const SearchResults = (props) => {
    const [userSearchedInput, setUserSearchedInput] = useState(props.userSearchedInput);
    const [searchResultsArr, setSearchResultsArr] = useState([]);

    useEffect(() => {
        getData(userSearchedInput);
    }, [userSearchedInput]);

    // delete later
    useEffect(() => {
        console.log(searchResultsArr);
    }, [searchResultsArr]);

    async function getData(searchValue) {
        let accumuletor = []
        let response = await fetch(`https://8nkv5zptli.execute-api.eu-west-1.amazonaws.com/dev/orders?baker_names=${searchValue}`);
        let result = await response.json();
        for (let meal of result) {
            accumuletor.push(meal);
        }
        setSearchResultsArr(accumuletor);
    }

    const fixDateStr = (collectingDate) => {
        let date = new Date(collectingDate);
        return (` ${String(date.getDate()).padStart(2, "0")}/${String(date.getMonth() + 1).padStart(2, "0")} , ${date.getHours()}:${String(date.getMinutes()).padStart(2, "0")}`);
    }

    return (
        <div className='search-results order-details'>
            <h2 className='order-details-title search-result-title'>תוצאות חיפוש עבור "{props.userSearchedInput}"</h2>
            <div className='results_container'>
                {searchResultsArr.length === 0 ?
                    <div>לא נמצאו תוצאות לחיפוש זה.</div>
                    : searchResultsArr.map((meal) => (
                        <div className='search-result' key={meal.order_id}>
                            <h4 id='order_name'>{meal.order_name}</h4>
                            <div className='order-details-container'>
                                <p id='collection_date'>{fixDateStr(meal.collecting_date)}</p>
                                <p id='collecting_location'>{meal.collecting_location}</p>
                            </div>
                            {meal.dishes.map((dish) => (
                                <div className='dish-container' key={dish.tooltip}>
                                    <p id='meals_num'>{dish.bakers.length}</p>
                                    <p id='dish_name'>{dish.type}</p>
                                    <p className='baker-info-kosher' id='is_kosher'>{dish.bakers[0].kosher ? "כשר" : "לא כשר"}</p>
                                    {/* <p id='dish_type_title'>פירוט: </p> */}
                                    {/* <p id='dish_type'>{dish.bakers[0].dish_type === "" ? "אין" : dish.bakers[0].dish_type}</p> */}

                                </div>
                            ))}
                        </div>
                    ))}
            </div>

        </div>
    )
}

export default SearchResults
