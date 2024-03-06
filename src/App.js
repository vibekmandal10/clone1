import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/pages/Home';
import Cart from './components/pages/Cart';
import LoginSignUp from './components/pages/LoginSignUp';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/cart' element={<Cart />}/>
        <Route path='/login-signup' element={<LoginSignUp />}/>

       
      </Routes>
     
      <Footer />
      </BrowserRouter>
     
    </div>
  );
}

export default App;
