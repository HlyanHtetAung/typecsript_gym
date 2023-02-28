import { Routes, Route } from "react-router-dom";
import {
  CreateClass,
  Home,
  AdminControls,
  CreateCategory,
  CreatePackage,
  CreateMember,
  CreatePlan,
  CreateTrainer,
} from "./pages/index";

import { Navbar } from "./components/index";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="createClass" element={<CreateClass />} />
          <Route path="editClass" element={<CreateClass edit />} />

          {/* Admin Side */}
          <Route path="adminDashboard" element={<AdminControls />} />
          <Route path="createCategory" element={<CreateCategory />} />
          <Route path="createPackage" element={<CreatePackage />} />
          <Route path="createMember" element={<CreateMember />} />
          <Route path="createPlan" element={<CreatePlan />} />
          <Route path="createTrainer" element={<CreateTrainer />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
