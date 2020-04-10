import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

import CharacterCreation from "./character-creation";

function App() {
  return (
    <div className="container-fluid">
      <Router>
        <Switch>
          <Route component={CharacterCreation} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
