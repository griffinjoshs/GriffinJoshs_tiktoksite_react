import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import { Link } from "react-router-dom";
import home from "./pages/Home";
import contact from "./pages/Contact";
import about from "./pages/About";
import Navbar from './components/Navbar/Navbar'

import "./App.css";

function App() {
  return (
    <Router>
        <Navbar/>
        <Switch>
        <Route exact path="/" component={home}/>
        <Route exact path="/contact" component={contact} />
        <Route exact path="/about" component={about} />
        </Switch>
    </Router>
  );
}

export default App;
