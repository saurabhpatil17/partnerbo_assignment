import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Signin from "../Signin/SignIn";
import Signup from "../Signup/SignUp";
import KafkaMessageView from "../Kafka/KafkaMessageView";
const MainView = () => {
  return (
    <main>
      <div className="py-2"></div>
      <div className="container">
        <Router>
          <div>
            <Switch>
              <Route path="/signin">
                <Signin />
              </Route>
              <Route path="/signup">
                <Signup />
              </Route>
              <Route path="/kafkaMessage">
                <KafkaMessageView />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    </main>
  );
};

export default MainView;
