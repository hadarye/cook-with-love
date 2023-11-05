import { Routes, Route } from "react-router-dom";
import './App.css';
import logo from '/cook-with-love-logo.JPG?url';
import OrderPage from './components/OrderPage/OrderPage.component';
import Management from './components/Management/Management.component';

function App() {

  return (
    <>
      {/* <img className='app-logo' src={logo}></img> */}
      <div className='title-container'>
        <h1 className='title'>מבשלות אהבה</h1>
        <h4 className='secondary-title'>בתל מונד</h4>
      </div>

      <Routes>
          <Route path="/cook-with-love" element={<OrderPage/>}/>
          <Route path="/cook-with-love/management" element={<Management></Management>}></Route>

      </Routes>

    </>
  )
}

export default App
