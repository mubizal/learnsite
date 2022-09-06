import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Auth from './Auth';
import "bootstrap/dist/css/bootstrap.min.css";
import'./Mystyle.css';
import Signin from './Signin';
import Signup from './Signup';
import Register from './Data/Register';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Auth/>}></Route>
        <Route path='/signin' element={<Signin/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/register' element={<Register/>}></Route>


      </Routes>
    </BrowserRouter>
    
    </div>
  );
}

export default App;
