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
  ClassDetail
} from "./pages/index";

import { Navbar } from "./components/index";
import { PILATES_DETAIL } from "./assets/content";

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
          <Route path="classDetail/pilate" element={<ClassDetail clsDetail={PILATES_DETAIL}/>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
