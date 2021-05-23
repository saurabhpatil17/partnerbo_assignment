import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarHeader from "./Components/Shared/NavbarHeader";
import Header from "./Components/Shared/Header";
import Footer from "./Components/Shared/Footer";
import Signin from "./Components/Signin/SignIn";
import MainView from "./Components/Shared/MainView";

function App() {
  return (
    <>
      <Header />
      <MainView />
      <Footer />
    </>
  );
}

export default App;
