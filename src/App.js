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
        <Route exact path="/" component={Home} />
        <Route exact path="/Cart" component={Cart} />
        <Route exact path="/LogIn" component={LogIn} />
      </Switch>
    </Router>
  );
}

export default App;
