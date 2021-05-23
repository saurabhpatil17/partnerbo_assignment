import NavbarHeader from "./NavbarHeader";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const Header = () => {
  return (
    <header id="header" className="App-header">
      <Navbar expand="lg">
        <Navbar.Brand href="#home">PartnerBO</Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link color="#FFFFFF" href="/signin">
              Sign In
            </Nav.Link>
            <Nav.Link color="#FFFFFF" href="/signup">
              Sign Up
            </Nav.Link>
            <Nav.Link color="#FFFFFF" href="/kafkaMessage">
              Kafka Message
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default Header;
