import './App.css';
import NavScrollExample from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Orders from './components/Orders';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignUp from './components/SignUp';
import BurgerHooks from './components/BurgerHooks';

function App() {
  return (
    <>
      <NavScrollExample />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BurgerHooks />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/sign_up" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
