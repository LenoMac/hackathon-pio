import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Home />
      </div>
    </div>
  );
}

export default App;
