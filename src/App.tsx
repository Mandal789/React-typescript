import "./App.css";
import Department from "./components/Second_Page/comp";
import Form from "./components/First_page/Form";
import NavBar from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/second" element={<Department/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
