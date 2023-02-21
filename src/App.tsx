import { Routes, Route } from "react-router-dom";
import { CreateClass, Home } from "./pages/index";
import { Navbar } from "./components/index";

function App() {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />\
          <Route path="createClass" element={<CreateClass />} />
          <Route path="editClass" element={<CreateClass edit />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
