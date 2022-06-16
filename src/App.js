import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";
import Temperature from './whether/Temperature';
import Login from './auth/Login';
import Signup from './auth/Signup';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Login/>} />
          <Route path='/signup' element={<Signup/>} />
          <Route path='/weather' element={<Temperature/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
