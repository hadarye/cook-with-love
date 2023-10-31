
import './App.css';
import logo from '/cook-with-love-logo.JPG?url';
import OrderPage from './components/OrderPage/OrderPage.component';

function App() {

  return (
    <>
      <img className='app-logo' src={logo}></img>
      <OrderPage></OrderPage>
      
    </>
  )
}

export default App
