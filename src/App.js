import React from "react";
import Navbar from "./Component/Navbar";
import Hero from "./Component/Hero";
import Service from "./Component/Service";
import Customer from "./Component/Customer";


function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Hero/>
      <Service/>
      <Customer/>
    </React.Fragment>
  );
}

export default App;
