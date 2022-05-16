import React from 'react';
import './App.css';
import {Route,Routes} from "react-router-dom";
import Header from "./components/Hedear/Header";
import HomePage from "./page/HomePage/HomePage";

function App() {
  return (
    <div className="App">
        <Header/>

        <Routes>
          <Route path="/" element={<HomePage/>}/>
        </Routes>

    </div>
  );
}

export default App;
