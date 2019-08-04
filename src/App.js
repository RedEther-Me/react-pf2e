import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

// import Step1 from "./step-1";
// import Step2 from "./step-2";
import CharacterCreation from "./character-creation";

function App() {
  return (
    <div className="container-fluid">
      <Router>
        <Switch>
          {/* <Route path="/step-2" component={Step2} />
          <Route component={Step1} /> */}
          <Route component={CharacterCreation} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
