import React from "react";
import HomeContainer from './container/HomeContainer'
import HeaderContainer from "./container/HeaderContainer";
function App() {
  return (
    <>
      <HeaderContainer/>
      <HomeContainer/>
    </>
  );
}

export default App;


// folder structure for that 

// components 
// containers
// service
   // actions 
   // reducers
   // constants - constant action and reducer file ko btayega ki, jab action se data reducer me jayega to kon sa data kon se function me jana chahiye vo constant btayega 