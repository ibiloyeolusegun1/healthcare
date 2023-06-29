import React from "react";
import Navbar from "./Component/Navbar";
import Hero from "./Component/Hero";
import Service from "./Component/Service";


function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Hero/>
      <Service/>
    </React.Fragment>
  );
}

export default App;
