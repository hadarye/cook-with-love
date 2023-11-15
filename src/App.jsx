import { Routes, Route, useNavigate } from "react-router-dom";
import './App.css';
import logo from '/cook-with-love-logo.JPG?url';
import OrderPage from './components/OrderPage/OrderPage.component';
import { useState, useEffect } from "react";

const App = () => {
  const [trail, setTrail] = useState();
  const [OrderList, setOrderList] = useState([]);
  const navigate = useNavigate();

  async function getData() {
    let accumuletor = []
    let response = await fetch("https://8nkv5zptli.execute-api.eu-west-1.amazonaws.com/dev/orders");
    let result = await response.json();
    for (let meal of result) {
      accumuletor.push(meal);
    }
    setOrderList(accumuletor);
  }

  useEffect(() => {
    getData();
  }, [])

  // async function getData() {
  //   let accumuletor = []
  //   let response = await fetch("https://8nkv5zptli.execute-api.eu-west-1.amazonaws.com/dev/dishes/register");
  //   let result = await response.json();
  //   for (let meal of result) {
  //     accumuletor.push(meal);
  //   }
  //   setTrail(accumuletor);
  // }

  let arr = [{ "contact_name": "Tahel", "total_vegans": 3, "dishes": [{ "total_count": 20, "kosher_missing": 0, "min_kosher_count": 2, "tooltip": "\u05e2\u05d5\u05d2\u05ea \u05d0\u05d9\u05e0\u05d2\u05dc\u05d9\u05e9 \u05e7\u05d9\u05d9\u05e7 \u05d0\u05d5 \u05e7\u05d5\u05e4\u05e1\u05ea \u05e2\u05d5\u05d2\u05d9\u05d5\u05ea", "type": "\u05e2\u05d5\u05d2\u05d4/\u05e2\u05d5\u05d2\u05d9\u05d5\u05ea", "total_missing": 16, "bakers": [{ "name": "hadar", "dish_type": "gfdg", "phone": "0000", "kosher": true }, { "name": "\u05d4\u05d3\u05e8", "dish_type": "\u05e4\u05e8\u05d8\u05d9\u05dd", "phone": "111", "kosher": true }, { "name": "\u05d4\u05d3\u05e8", "dish_type": "\u05e4\u05e8\u05d8\u05d9\u05dd", "phone": "111", "kosher": true }, { "name": "\u05d4\u05d3\u05e8", "dish_type": "\u05e4\u05e8\u05d8\u05d9\u05dd", "phone": "111", "kosher": true }] }, { "total_count": 1, "kosher_missing": 0, "min_kosher_count": 0, "tooltip": "", "type": "\u05e2\u05d5\u05d2\u05d4/\u05e2\u05d5\u05d2\u05d9\u05d5\u05ea \u05d8\u05d1\u05e2\u05d5\u05e0\u05d9", "total_missing": 1, "bakers": [] }, { "total_count": 10, "kosher_missing": 0, "min_kosher_count": 0, "tooltip": "\u05d7\u05d8\u05d9\u05e4\u05d9\u05dd \u05de\u05dc\u05d5\u05d7\u05d9\u05dd \u05d0\u05d5 \u05de\u05ea\u05d5\u05e7\u05d9\u05dd \u05e9\u05d0\u05d9\u05e0\u05dd \u05d3\u05d5\u05e8\u05e9\u05d9\u05dd \u05e7\u05d9\u05e8\u05d5\u05e8", "type": "\u05d7\u05d8\u05d9\u05e4\u05d9\u05dd\u05bf", "total_missing": 9, "bakers": [{ "name": "\u05d4\u05d3\u05e8", "dish_type": "", "phone": "0000", "kosher": true }] }, { "total_count": 10, "kosher_missing": 0, "min_kosher_count": 0, "tooltip": "\u05e7\u05d5\u05e4\u05e1\u05d0 \u05d0\u05d7\u05ea \u05d0\u05d5 \u05db-5-6 \u05d7\u05d8\u05d9\u05e4\u05d9\u05dd \u05d1\u05ea\u05e4\u05d6\u05d5\u05e8\u05ea", "type": "\u05d7\u05d8\u05d9\u05e4\u05d9 \u05d0\u05e0\u05e8\u05d2\u05d9\u05d4/\u05d7\u05dc\u05d1\u05d5\u05df", "total_missing": 10, "bakers": [] }, { "total_count": 10, "kosher_missing": 0, "min_kosher_count": 0, "tooltip": "", "type": "\u05d0\u05d2\u05d5\u05d6\u05d9\u05dd \u05d5\u05e9\u05e7\u05d3\u05d9\u05dd/\u05e4\u05d9\u05e8\u05d5\u05ea \u05d9\u05d1\u05e9\u05d9\u05dd", "total_missing": 10, "bakers": [] }, { "total_count": 10, "kosher_missing": 0, "min_kosher_count": 0, "tooltip": "", "type": "\u05de\u05de\u05ea\u05e7\u05d9\u05dd \u05d5\u05e1\u05d5\u05db\u05e8\u05d9\u05d5\u05ea", "total_missing": 10, "bakers": [] }], "created_at": "02/11/2023, 23:22", "contact_phone": "123", "collecting_person_name": "Merav", "status": "Pending", "total": 100, "order_name": "28", "collecting_location": "\u05d4\u05e0\u05d5\u05d8\u05e2 11 \u05ea\u05dc \u05de\u05d5\u05e0\u05d3", "manager_name": "Merav", "collecting_person_phone": "123", "order_type": "cakes_and_snacks", "total_kosher": 7, "order_id": "24eb39c0-499e-42b8-b809-b997a3ea532d", "collecting_date": "2023-11-05 20:00", "total_vegetarians": 0 }, { "contact_name": "Tahel", "total_vegans": 4, "dishes": [{ "total_count": 10, "kosher_missing": 2, "min_kosher_count": 2, "tooltip": "\u05d1\u05db\u05de\u05d5\u05ea \u05d4\u05e9\u05d5\u05d5\u05d4 \u05dc- 15 \u05e9\u05e0\u05d9\u05e6\u05dc\u05d9\u05dd (1 \u05e7\u05f4\u05d2) /20 \u05e7\u05e6\u05d9\u05e6\u05d5\u05ea (1 \u05e7\u05f4\u05d2) / 5 \u05db\u05e8\u05e2\u05d9\u05d9\u05dd (\u05db-1.5 \u05e7\u05f4\u05d2)", "total_missing": 2, "type": "\u05de\u05e0\u05d4 \u05d1\u05e9\u05e8\u05d9\u05ea", "bakers": [{ "name": "Merav", "dish_type": "\u05e9\u05e0\u05d9\u05e6\u05dc\u05d9\u05dd", "phone": "123", "kosher": false }, { "name": "Merav", "dish_type": "\u05e9\u05e0\u05d9\u05e6\u05dc\u05d9\u05dd", "phone": "123", "kosher": false }, { "name": "Merav", "dish_type": "\u05e9\u05e0\u05d9\u05e6\u05dc\u05d9\u05dd", "phone": "123", "kosher": false }, { "name": "Merav", "dish_type": "\u05e9\u05e0\u05d9\u05e6\u05dc\u05d9\u05dd", "phone": "123", "kosher": false }, { "name": "Merav", "dish_type": "\u05e9\u05e0\u05d9\u05e6\u05dc\u05d9\u05dd", "phone": "123", "kosher": false }, { "name": "Merav", "dish_type": "\u05e9\u05e0\u05d9\u05e6\u05dc\u05d9\u05dd", "phone": "123", "kosher": false }, { "name": "Merav", "dish_type": "\u05e9\u05e0\u05d9\u05e6\u05dc\u05d9\u05dd", "phone": "123", "kosher": false }, { "name": "Merav", "dish_type": "\u05e9\u05e0\u05d9\u05e6\u05dc\u05d9\u05dd", "phone": "123", "kosher": false }] }, { "total_count": 1, "kosher_missing": 0, "min_kosher_count": 0, "tooltip": "", "total_missing": 1, "type": "\u05de\u05e0\u05d4 \u05d8\u05d1\u05e2\u05d5\u05e0\u05d9\u05ea", "bakers": [] }, { "total_count": 5, "kosher_missing": 0, "min_kosher_count": 1, "tooltip": "\u05dc\u05de\u05e9\u05dc  \u05d0\u05d5\u05e8\u05d6, \u05ea\u05e4\u05d5\u05f4\u05d0, \u05e4\u05e1\u05d8\u05d4, \u05e4\u05d9\u05e8\u05d4 \u05d0\u05d5 \u05e4\u05ea\u05d9\u05ea\u05d9\u05dd", "total_missing": 1, "type": "2 \u05dc\u05d9\u05d8\u05e8 \u05e4\u05d7\u05de\u05d9\u05de\u05d4", "bakers": [{ "name": "Merav", "dish_type": "\u05d0\u05d5\u05e8\u05d6", "phone": "456", "kosher": false }, { "name": "Merav", "dish_type": "\u05d0\u05d5\u05e8\u05d6", "phone": "456", "kosher": false }, { "name": "Merav", "dish_type": "\u05d0\u05d5\u05e8\u05d6", "phone": "456", "kosher": false }, { "name": "Tahel", "dish_type": " \u05e4\u05e1\u05d8\u05d4", "phone": "456", "kosher": true }] }, { "total_count": 6, "kosher_missing": 1, "min_kosher_count": 1, "tooltip": "\u05dc\u05de\u05e9\u05dc \u05e1\u05dc\u05d8, \u05d0\u05e0\u05d8\u05d9\u05e4\u05e1\u05d8\u05d9, \u05e9\u05e2\u05d5\u05e2\u05d9\u05ea \u05d9\u05e8\u05d5\u05e7\u05d4 \u05d0\u05d5 \u05d9\u05e8\u05e7\u05d5\u05ea \u05de\u05d1\u05d5\u05e9\u05dc\u05d9\u05dd", "total_missing": 6, "type": "1 \u05dc\u05d9\u05d8\u05e8 \u05de\u05e0\u05ea \u05d9\u05e8\u05e7", "bakers": [] }, { "total_count": 8, "kosher_missing": 1, "min_kosher_count": 1, "tooltip": "\u05e2\u05d5\u05d2\u05ea \u05d0\u05d9\u05e0\u05d2\u05dc\u05d9\u05e9 \u05e7\u05d9\u05d9\u05e7", "total_missing": 8, "type": "\u05e2\u05d5\u05d2\u05d4 \u05e4\u05e8\u05d5\u05d5\u05d4", "bakers": [] }, { "total_count": 1, "kosher_missing": 0, "min_kosher_count": 0, "tooltip": "", "total_missing": 1, "type": "\u05e2\u05d5\u05d2\u05d4 \u05d8\u05d1\u05e2\u05d5\u05e0\u05d9\u05ea", "bakers": [] }, { "total_count": 7, "kosher_missing": 1, "min_kosher_count": 1, "tooltip": "", "total_missing": 7, "type": "\u05dc\u05d7\u05dd \u05d0\u05d5 \u05d7\u05dc\u05d4", "bakers": [] }, { "total_count": 3, "kosher_missing": 0, "min_kosher_count": 0, "tooltip": "", "total_missing": 3, "type": "\u05d1\u05e7\u05d1\u05d5\u05e7 \u05ea\u05d9\u05e8\u05d5\u05e9", "bakers": [] }, { "total_count": 1, "kosher_missing": 0, "min_kosher_count": 0, "tooltip": "", "total_missing": 1, "type": "50 \u05db\u05d5\u05e1\u05d5\u05ea", "bakers": [] }], "created_at": "02/11/2023, 23:12", "contact_phone": "123", "collecting_person_name": "Tahel", "status": "Pending", "total": 40, "order_name": "27", "collecting_location": "\u05d4\u05d3\u05e7\u05dc 96 \u05ea\u05dc \u05de\u05d5\u05e0\u05d3", "manager_name": "Merav", "collecting_person_phone": "456", "order_type": "friday_dinner_hot", "total_kosher": 5, "order_id": "27ea4aff-979d-4f60-8951-5237bf487ba8", "collecting_date": "2023-11-11 11:11", "total_vegetarians": 0 }]

  return (
    <>

      {/* <img className='app-logo' src={logo}></img> */}

      <Routes>
        <Route path="/" element={<OrderPage OrderList={OrderList} isManager={false} />} />
        <Route path="/management" element={<OrderPage OrderList={OrderList} isManager={true} />}></Route>

      </Routes>
      <button onClick={() => navigate('/management')}>management</button>
      <button onClick={() => navigate('/')}>home</button>
    </>
  )
}

export default App
