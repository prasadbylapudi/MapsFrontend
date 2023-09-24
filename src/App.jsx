import { useState } from "react";
import "./App.css";
import MapComponent from "./components/Map";
import Header from "./components/Header";
function App() {
  return (
    <>
      <div>
        <Header />
        <MapComponent />
      </div>
    </>
  );
}

export default App;
