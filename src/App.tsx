import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./Pages/Home";
import AllProperties from "./Pages/AllProperties";
import AllComments from "./Pages/AllComment";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/AllProperties" element={<AllProperties />} />
        <Route path="/AllComments" element={<AllComments />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App