import React from "react";
import Navbar from "./Component/Navbar";
import Hero from "./Component/Hero";
import Service from "./Component/Service";
import Leading from "./Component/Leading";


function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Hero/>
      <Service/>
      <Leading/>
    </React.Fragment>
  );
}

export default App;
