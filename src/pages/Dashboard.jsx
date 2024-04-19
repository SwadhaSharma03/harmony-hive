import React from 'react';
import Navbar from '../components/navbar/Navbar'; // Correct import path
import { Link } from 'react-router-dom';

function Dashboard() {
  return (
    <div className="App">
      {/* Uncommenting <h1>Hello</h1> is optional */}
      {/* <h1>Hello</h1> */}
      <Navbar>
        <div className="hero">
          <img src="https://springinteractive.co/wp-content/uploads/2018/03/Spring_Big_Services.png" alt="image" width="700px" height="auto" />
          <div style={{ padding: '60px', }}>
            <center>
              <h1>We Make HR Simple</h1>
              <p>
                Finally, you can stop with the unvetted internet searches, manual HR tasks, and management of
                critical information and documentation through multiple vendors. Harmony Hive consolidates your
                compliance information and documentation management in a single source, with intuitive tools
                — designed specifically for human resources professionals and prepared by attorneys and industry
                experts.
              </p>
            </center>
          </div>
          {/* <div>
            <img src="https://springinteractive.co/wp-content/uploads/2018/06/health-spring-small.png" alt="image" width="100%" height="auto" />
          </div> */}
        </div>
        <br /><br />
        <div className="dashbrd">
          <Link to='/attendence'>
          <div className="dashboard-item">
            <span className="serial-number"></span>
            <h3>Track Employee Attendance</h3>
          </div>
          </Link>
          <div className="dashboard-item">
            <a href="./feedback/feedback.html">
              <span className="serial-number"></span>
              <h3>Grievance Redressal</h3>
            </a>
          </div>
        </div>
        <br /><br /><br /><br />
        <div className="charts-container">
          <canvas id="revenueGraph"></canvas>
          <canvas id="revenueSourcesPieChart"></canvas>
        </div>
      </Navbar>
    </div>
  );
}

export default Dashboard;