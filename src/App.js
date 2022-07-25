import './App.css';
import { Row, Col, Container } from 'react-bootstrap';
import NavScrollExample from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'bootstrap';
import Footer from './components/Footer';
import Burger from './components/Burger';
import { NameForm } from './components/Testing';
import { Example } from './components/use';

function App() {
  return (
    <div>
      <NavScrollExample />
      <Burger/>

    </div>
  );
}

export default App;
