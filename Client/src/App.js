import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import { Link } from "react-router-dom";
import home from "./pages/Home";
import contact from "./pages/Contact";
import about from "./pages/About";
import Navbar from "./components/Navbar/Navbar";
import axios from "axios";
import "./App.css";
import LinkPage from "./pages/LinkPage";

function App() {
  const [msg, setMsg] = useState("loading...");

  useEffect(() => {
    axios
      .get("http://localhost:8000/api")
      .then((res) => setMsg(res.data.message));
  }, []);
  return (
    <div className="App">
      <h2>Message from backend{msg}</h2>
      <Router>
        <Switch>
          <Route exact path="/" component={home} />
          <Route exact path="/contact" component={contact} />
          <Route exact path="/about" component={about} />
          <Route exact path="/links" component={LinkPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
