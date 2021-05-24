import './App.css';
import Home from './Home';
import Cart from './Cart';
import LogIn from './LogIn';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App(state) {
  return (
    <Router>
      <Switch>
        <Route path="/Home">
          <Home/>
        </Route>
        <Route path="/Cart">
          <Cart/>
        </Route>
        <Route path="/LogIn">
          <LogIn/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
