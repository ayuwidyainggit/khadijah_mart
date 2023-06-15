import "./App.css";
import Home from "./views/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ViewProduct from "./views/ViewProduct";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<ViewProduct />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
