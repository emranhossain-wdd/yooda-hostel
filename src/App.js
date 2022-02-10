import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home/Home';
import AuthProvider from './Context/AuthProvider';
import SignIN from './pages/SignIN/SignIn/SignIn';
import SignUp from './pages/SignIN/SignUp/SignUp';
import PrivateRoute from './pages/SignIN/PrivateRoute/PrivateRoute';
import DashboardDrawer from './pages/Dashboard/DashboardDrawer/DashboardDrawer';
import MakeAdmin from './pages/Dashboard/MakeAdmin/MakeAdmin';
import MyBlogs from './pages/Dashboard/MyBlogs/MyBlogs';
import AddFood from './pages/Dashboard/AddFood/AddFood';
import AdminRoute from './pages/SignIN/AdminRoute/AdminRoute';
import AddStudent from './pages/Dashboard/AddStudent/AddStudent';
import Student from './pages/Home/Student/Student';
import Food from './pages/Home/Food/Food';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/student/:id" element={<Student />} />
          <Route path="/food/:id" element={<Food />} />
          <Route path="/dashboard" element={<PrivateRoute><DashboardDrawer /></PrivateRoute>} >
            <Route path='/dashboard/myblogs' element={<MyBlogs />} />
            <Route path='/dashboard/add-food' element={<AdminRoute><AddFood /></AdminRoute>} />
            <Route path='/dashboard/add-student' element={<AdminRoute><AddStudent /></AdminRoute>} />
            {/* <Route path={`/dashboard/allblogs`} element={<AdminRoute><AllBlogs /></AdminRoute>} /> */}
            {/* <Route path={`/dashboard/newblog`} element={<NewBlog />} /> */}
            <Route path={`/dashboard/make-admin`} element={<MakeAdmin />} />
          </Route>
          <Route path="/signin" element={<SignIN />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
