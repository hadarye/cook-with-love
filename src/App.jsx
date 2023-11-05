import { Routes, Route } from "react-router-dom";
import './App.css';
import logo from '/cook-with-love-logo.JPG?url';
import OrderPage from './components/OrderPage/OrderPage.component';
import Management from './components/Management/Management.component';
import { useState, useEffect } from "react";

const App = () => {
  const [trail, setTrail] = useState();

  useEffect(() => {
    // getData(); 
  })

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
      {/* <img className='app-logo' src={logo}></img> */}
      <div className='title-container'>
        <h1 className='title'>מבשלות אהבה</h1>
        <h4 className='secondary-title'>בתל מונד</h4>
      </div>

      <Routes>
        <Route path="/cook-with-love" element={<OrderPage />} />
        <Route path="/cook-with-love/management" element={<Management></Management>}></Route>

      </Routes>

    </>
  )
}

export default App
