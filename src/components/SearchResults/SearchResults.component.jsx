
import { useEffect, useRef, useState } from 'react'
import trash from '../../assets/images/trash.png';
import add from '../../assets/images/add.png';
import subtract from '../../assets/images/subtraction.png'
import './SearchResults.styles.css'

const SearchResults = (props) => {
    const [userSearchedInput, setUserSearchedInput] = useState(props.userSearchedInput);
    const [searchResultsArr, setSearchResultsArr] = useState([]);
    const [numInputValue, setNumInputValue] = useState(1);
    const [currDishNum, setCurrDishNum] = useState(1);
    const [showPopUp, setShowPopUp] = useState(false);
    const chosenDish = useRef([]);
    const chosenMeal = useRef([]);

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

    const handleDeleteBtn = (dish, meal) => {
        chosenDish.current = dish;
        chosenMeal.current = meal;
        setCurrDishNum(dish.bakers.length);
        setShowPopUp(true);
    }

    const unRegister = async () => {
        const url = 'https://8nkv5zptli.execute-api.eu-west-1.amazonaws.com/dev/dishes/unregister';
        const objUnRegister = {
            "order_id": chosenMeal.current.order_id,
            "baker_name": chosenDish.current.bakers[0].name,
            "dish_type": chosenDish.current.type,
            "number_of_dishes": numInputValue
        }
        console.log('unRegister ', objUnRegister)
        const response = await fetch(url, {
            "method": "POST",
            body: JSON.stringify(objUnRegister),
        });
        console.log('post completed');
        const result = await response.json()
        console.log(result);
        setNumInputValue(1); 
        setShowPopUp(false);
        getData(userSearchedInput);
    }

    return (
        <div className='search-results order-details'>
            <div onClick={() => props.closeSearch()} className='back-arrow'></div>
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
                                    <img className='trash-icon' onClick={() => handleDeleteBtn(dish, meal)} src={trash}></img>
                                    <p id='meals_num'>{dish.bakers.length}</p>
                                    <p id='dish_name'>{dish.type}</p>
                                    {/* <p className='baker-info-kosher' id='is_kosher'>{dish.bakers[0].kosher ? "כשר" : "לא כשר"}</p> */}
                                    <p id='dish_type_title'>פירוט: </p>
                                    <p id='dish_type'>{dish.bakers[0].dish_type === "" ? "אין" : dish.bakers[0].dish_type}</p>

                                </div>
                            ))}
                        </div>
                    ))}

            </div>
            {showPopUp ?
                <div className='black-screen'>
                    <div className='popup-container delete-popup'>
                        <div onClick={() => { setNumInputValue(1); setShowPopUp(false) }} className='close-btn'></div>
                        <p>האם הינך בטוחה שאת רוצה למחוק הרשמתך למנה זו?</p>
                        <div className='number-container' style={{lineHeight: '1.2rem !important'}}>
                            מספר המנות:
                            <div className='number-controls'>
                                <img src={add} className={currDishNum > numInputValue ? 'number-controller' : 'number-controller gray'} onClick={() => { currDishNum > numInputValue ? setNumInputValue(numInputValue + 1) : null }} />
                                <input className='number-input' step="1" readOnly value={numInputValue} min="1" max="100" />
                                <img onClick={() => { numInputValue > 1 ? setNumInputValue(numInputValue - 1) : null }} src={subtract} className={numInputValue > 1 ? 'number-controller' : 'number-controller gray'} />
                            </div>
                        </div>
                        <button onClick={() => unRegister()} className='register-btn'>למחיקה</button>
                    </div>
                </div>
                : null}
        </div>
    )
}

export default SearchResults
