import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import home from './pages/Home'
import NotFound from './pages/Notfound';
import './App.css';
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={home} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}
export default App;
