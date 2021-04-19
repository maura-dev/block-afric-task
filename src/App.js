import React from "react";
import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import SideBar from './components/sideBar.js';
import Activity from './pages/activity.js';
import Wallet from './pages/wallet.js';
import Market from './pages/market.js';
import Earn from './pages/earn.js';
import Home from './pages/home.js';

function App() {
  return (
    <Router>
      <div>
        <SideBar />
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/activity" component={Activity} />
            <Route exact path="/wallet" component={Wallet} />
            <Route exact path="/market" component={Market} />
            <Route exact path="/earn" component={Earn} />
          </Switch>
      </div>
    </Router>
   
  );
}

export default App;
