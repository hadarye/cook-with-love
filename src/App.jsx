import { Routes, Route, useNavigate } from "react-router-dom";
import './App.css';
import logo from '/cook-with-love-logo.JPG?url';
import OrderPage from './components/OrderPage/OrderPage.component';
import Blocked from './components/Blocked/Blocked.component';
import { useState, useEffect } from "react";

const App = () => {
  const [trail, setTrail] = useState();
  const [OrderList, setOrderList] = useState([]);
  const [isFiltered, setIsFiltered] = useState(false);
  const [unfilteredOrderList, setUnfilteredOrderList] = useState([]);
  const navigate = useNavigate();

  async function getData() {
    let accumuletor = []
    let response = await fetch("https://8nkv5zptli.execute-api.eu-west-1.amazonaws.com/dev/orders");
    let result = await response.json();
    for (let meal of result) {
      accumuletor.push(meal);
    }
    setOrderList(accumuletor);
    setUnfilteredOrderList(accumuletor);
  }

  useEffect(() => {
    if(screen.width >= 480) {
      navigate("/blocked");
    }
    getData();
  }, []);

  const filterOrderArr = () => {
    if (!isFiltered) {
      setOrderList([]);
      let filteredOrderList = ([]);
      OrderList.map((order) => {
        if (order.status === "Pending") {
          filteredOrderList = [...filteredOrderList, order];
        }
      });
      setOrderList(filteredOrderList);
    } else {
      setOrderList([...unfilteredOrderList]);
    }
    setIsFiltered(!isFiltered);
  }

  return (
    <>

      {/* <img className='app-logo' src={logo}></img> */}

      <Routes>
        <Route path="/" element={<OrderPage getData={getData} filterOrderArr={filterOrderArr} OrderList={OrderList} isManager={false} />} />
        <Route path="/management" element={<OrderPage getData={getData} filterOrderArr={filterOrderArr} OrderList={OrderList} isManager={true} />}></Route>
        <Route path="/blocked" element={<Blocked/>}></Route>
      </Routes>
      <button onClick={() => navigate('/management')}>management</button>
      <button onClick={() => navigate('/')}>home</button>
    </>
  )
}

export default App
