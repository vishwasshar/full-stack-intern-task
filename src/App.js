import "./App.css";
import { Routes, Route } from "react-router-dom";
import Que1 from "./components/Que1";
import Que3 from "./components/Que3";
import Nav from "./components/Nav";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Nav />} />
        <Route path="/Que1" element={<Que1 />} />
        <Route path="/Que3" element={<Que3 />} />
      </Routes>
    </>
  );
}

export default App;
