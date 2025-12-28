import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./Pages/Home";
import AllProperties from "./Pages/AllProperties";
import AllComments from "./Pages/AllComment";
import AllFAQs from "./Pages/AllFAQ";
import About from "./Pages/About";
import Properties from "./Pages/Properties";
import PropertyDetails from "./Pages/PropertyDetails.tsx";
import Service from "./Pages/Service";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/AllProperties" element={<AllProperties />} />
        <Route path="/AllComments" element={<AllComments />} />
        <Route path="/AllFAQs" element={<AllFAQs />} />
        <Route path="/About" element={<About />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/properties/:name" element={<PropertyDetails />} />
        <Route path="/Service" element={<Service />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App