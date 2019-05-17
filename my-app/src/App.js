import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './components/home';
import Navbar from "./components/navbar";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
