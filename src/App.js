import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Parallax from "./Parallax";
import Table from "./Table";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/" exact component={Parallax} />
          <Route path="/task2" exact component={Table} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
