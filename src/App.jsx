import { Routes, Route } from "react-router-dom";
import './App.css';
import logo from '/cook-with-love-logo.JPG?url';
import FilterBar from './components/FilterBar/FilterBar.component';
import OrderPage from './components/OrderPage/OrderPage.component';
import Management from './components/Management/Management.component';
import { useState, useEffect } from "react";

const App = () => {
  const [trail, setTrail] = useState();
  const [OrderList, setOrderList] = useState([]);

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

  return (
    <>
      <FilterBar />

      {/* <img className='app-logo' src={logo}></img> */}
      <div className='title-container'>
        <h1 className='title'>מבשלות אהבה</h1>
        <h4 className='secondary-title'>בתל מונד</h4>
      </div>
      <Routes>
        <Route path="/cook-with-love" element={<OrderPage OrderList={OrderList} />} />
        <Route path="/cook-with-love/management" element={<Management OrderList={OrderList} />}></Route>

      </Routes>

    </>
  )
}

export default App
