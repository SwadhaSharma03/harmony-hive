import './App.css';
import Dashboard from './pages/Dashboard';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Policies from './pages/policies/Policies';
import Attendance from './pages/attendence/Attendence';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/policies' element={<Policies />} />
          <Route path='/dashboard' element={<Dashboard/>}/>
          {/* <Route path='./table' element={<Table/>}/> */}
          {/* <Route path='./manageUser' element={<ManageUser/>}/> */}
          {/* <Route path='./reports' element={<Reports/>}/> */}
          <Route path='/attendence' element={<Attendance />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;