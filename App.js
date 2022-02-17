import React from "react";
import {BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom'
import Home from "./pages/Home"
import Bmi from "./components/Bmi";
import Calc from "./components/Calc";
import Grade from "./components/Grade";
import Login from "./components/Login";


const App =() => {
  return(
    <div>
      <Router>
        <Routes>
    
          <Route expected path="/" element={<Home/>}/>
          <Route path = "/bmi" element={<Bmi/>}/>
          <Route path = "/calc" element={<Calc/>}/>
          <Route path="/grade" element={<Grade/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
      </Router>
    </div>
  )
}
export default App;