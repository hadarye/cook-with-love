
import './App.css';
import logo from '/cook-with-love-logo.JPG?url';
import OrderPage from './components/OrderPage/OrderPage.component';

function App() {

  return (
    <>
      {/* <img className='app-logo' src={logo}></img> */}
      <div className='title-container'>
        <h1 className='title'>מבשלות אהבה</h1>
        <h4 className='secondary-title'>בתל מונד</h4>
      </div>

      <OrderPage></OrderPage>

    </>
  )
}

export default App
