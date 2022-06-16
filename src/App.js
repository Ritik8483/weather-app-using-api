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

function App() {
  return (
    <div>
      <Router>
        <Routes>
          {/* <Route path='/' element={<Login/>} /> */}
        </Routes>
      </Router>
      <Temperature/>
    </div>
  );
}

export default App;
