import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Breakfast from './Breakfast/Breakfast';
import Dinner from './Dinner/Dinner';
import Home from './Home/Home/Home';
import Lunch from './Lunch/Lunch';
;

function App() {
  return (
    <div>
      <Home></Home>
      <Routes>
        <Route path='/home breakfast' element={<Breakfast></Breakfast>}></Route>
        <Route path='lunch' element={<Lunch></Lunch>}></Route>
        <Route path='dinner' element={<Dinner></Dinner>}></Route>
      </Routes>
    </div >
  );
}

export default App;
