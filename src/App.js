import React from "react";
import Navbar from "./Component/Navbar";
import Hero from "./Component/Hero";
import Service from "./Component/Service";

import Customer from "./Component/Customer";

import Leading from "./Component/Leading";
import Article from "./Component/Article";
import Footer from "./Component/Footer";



function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Hero/>
      <Service/>

      <Customer/>

      <Leading/>
      <Article/>
      <Footer/>

    </React.Fragment>
  );
}

export default App;
