import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Signin from "../Signin/SignIn";
import Signup from "../Signup/SignUp";
import KafkaMessageView from "../Kafka/KafkaMessageView";
const NavbarHeader = () => {
  return (
    <Router>
      <div>
        <nav>
          <Nav.Link href="/signin">Sign in</Nav.Link>
          <Nav.Link href="/signup">Sign Up</Nav.Link>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/signin">
            <Signin />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/">
            <KafkaMessageView />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default NavbarHeader;
