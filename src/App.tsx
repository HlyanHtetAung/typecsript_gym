import { Routes, Route } from 'react-router-dom';
import {
  CreateClass,
  Home,
  AdminControls,
  CreateCategory,
  CreatePackage,
  CreateMember,
  CreatePlan,
  CreateTrainer,
  ClassDetail,
  ClassStatusDetail,
} from './pages/index';

import { Navbar } from './components/index';
import { PILATES_DETAIL, YOGA_DETAIL } from './assets/content';
import AboutUs from './pages/AboutUs';
import ClientClasses from './pages/ClientClasses';
import Login from './pages/Login';
import { useAppSelector } from './stores/hooks';
import ViewMembers from './pages/ViewMembers';
import ClientProfile from './pages/ClientProfile';
import ViewBooking from './pages/ViewBooking';
import ViewCategories from './pages/ViewCategories';
import EditCategoryModal from './components/EditCategoryModal';

function App() {
  const { userData }: any = useAppSelector((state) => state.currentUser);
  console.log(userData);
  const editCategory = useAppSelector((state) => state.editCategory);
  return (
    <div className="relative">
      {editCategory.openEditCategoryModal && <EditCategoryModal />}

      <Navbar />
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="aboutUs" element={<AboutUs />} />
          <Route path="classes" element={<ClientClasses />} />
          <Route
            path="classDetail/pilate"
            element={<ClassDetail clsDetail={PILATES_DETAIL} />}
          />
          <Route
            path="classDetail/yoga"
            element={<ClassDetail clsDetail={YOGA_DETAIL} />}
          />
          <Route
            path="classStatusDetail/:packageId/:trainerId"
            element={<ClassStatusDetail />}
          />
          <Route path="login" element={<Login />} />
          <Route path="profile" element={<ClientProfile />} />
          {/* Admin Side */}
          <Route path="createClass" element={<CreateClass />} />
          <Route path="editClass" element={<CreateClass edit />} />
          <Route path="adminDashboard" element={<AdminControls />} />
          <Route path="createCategory" element={<CreateCategory />} />
          <Route path="createPackage" element={<CreatePackage />} />
          <Route path="createMember" element={<CreateMember />} />
          <Route path="createPlan" element={<CreatePlan />} />
          <Route path="createTrainer" element={<CreateTrainer />} />
          <Route path="viewMembers" element={<ViewMembers />} />
          <Route path="viewBooking" element={<ViewBooking />} />
          <Route path="viewCategories" element={<ViewCategories />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
