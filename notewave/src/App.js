import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Friends from "./components/Friends"
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'


function App() {
  return (
  <Router>
    <div>
      <Navbar></Navbar>

      <Switch>
        <Route path='/friends'>
          <Friends/>
        </Route>
      </Switch>

      <Switch>
        <Route exact path='/'>
          <Home/>
        </Route>
      </Switch>
    </div>
  </Router>

  );
}

export default App;
