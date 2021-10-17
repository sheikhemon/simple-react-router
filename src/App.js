import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home';
import Friends from './Components/Friends/Friends';
import About from './Components/About/About';
import NotFound from './Components/NotFound/NotFound';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import FriendDetail from './Components/FriendDetail/FriendDetail';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/Home">
            <Home></Home>
          </Route>
          <Route path="/Friends">
            <Friends></Friends>
          </Route>
          <Route path="/Friend/:FriendId">
            <FriendDetail></FriendDetail>
          </Route>
          <Route path="/About">
            <About></About>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
