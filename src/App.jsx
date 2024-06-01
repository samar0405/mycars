import React from "react";
import { Blue, Gentra, Black, White, Red, Cobalt } from "./pages";
import { Header, Footer } from "./components";
import { Outlet } from "react-router-dom";
const App = () => {
  return (
    <>
      
      <Header />
     
      <Outlet />

      <Footer />
    </>
  );
};

export default App;
