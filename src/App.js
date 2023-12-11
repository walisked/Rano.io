import React from "react";
import { BrowserRouter,Route, Routes } from "react-router-dom";
import { Home } from "./Pages/Home";
import { Profile } from "./Pages/Profile";


function App() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Profile" element={<Profile/>}/>
        </Routes>
      </BrowserRouter>
    </React.StrictMode>

  );
}

export default App;
