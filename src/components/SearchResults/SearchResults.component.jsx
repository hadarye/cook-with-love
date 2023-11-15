
import { useEffect, useRef, useState } from 'react'
import './SearchResults.styles.css'

const SearchResults = (props) => {
    const [userSearchedInput, setUserSearchedInput] = useState(props.userSearchedInput);
    const [searchResultsArr, setSearchResultsArr] = useState([]);
    useEffect(() => {
        console.log(userSearchedInput);
        getData(userSearchedInput);
    }, [userSearchedInput]);

    async function getData(searchValue) {
        let accumuletor = []
        let response = await fetch(`https://8nkv5zptli.execute-api.eu-west-1.amazonaws.com/dev/orders?baker_names=${searchValue}`);
        let result = await response.json();
        for (let meal of result) {
            accumuletor.push(meal);
        }
        setSearchResultsArr(accumuletor);
    }

    useEffect(() => {
        console.log(searchResultsArr);
    }, [searchResultsArr]);

    const filterArr = (bakers) => {
        let bakersArr = bakers;
        let initialValue = [{}];
        const filterBakers = bakersArr.reduce(
            (accumulator, currentValue) => {
                if (accumulator.at(-1)["dish_type"] === currentValue["dish_type"]) {
                    if (typeof (accumulator.at(-1).counter) !== "number") {
                        accumulator.at(-1).counter = 1;
                    } else {
                        accumulator.at(-1).counter++;
                        // console.log(accumulator);
                    }
                    return accumulator;
                } else {
                    return [...accumulator, currentValue];
                }
            },
            initialValue,
        );
        filterBakers.splice(0, 1);
        console.log(filterBakers);
        return (filterBakers);
    }

    return (
        <div className='order-details'>
            <h2 className='order-details-title search-result-title'>תוצאות חיפוש עבור "{props.userSearchedInput}"</h2>
            {searchResultsArr.length === 0 ?
                <div>לא נמצאו תוצאות לחיפוש זה.</div>
                : searchResultsArr.map((meal) => (
                    <div key={meal.order_id}>
                        <p>{meal.collecting_date}</p>
                        <p>{meal.collecting_location}</p>
                        <p>{meal.order_name}</p>

                        {meal.dishes.map((dish) => (
                            <div>
                                <p>{dish.bakers.length}</p>
                                {dish.bakers.map((baker) => (
                                    <div key={baker.dish_type}>
                                        <p>{baker.dish_type}</p>
                                    </div>

                                ))}
                            </div>
                        ))}
                    </div>
                ))}
        </div>
    )
}

export default SearchResults
