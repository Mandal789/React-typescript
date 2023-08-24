// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import CheckboxesGroup from "./components/comp";
//import IndeterminateCheckbox from "./components/component11";
//import Departments from './components/Appppp'
import Form from "./components/First_page/Form";
import NavBar from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/second" element={<CheckboxesGroup/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
