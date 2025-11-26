import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./Pages/Home";
import AllProperties from "./Pages/AllProperties";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/AllProperties" element={<AllProperties />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App