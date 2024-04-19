import React from 'react';
import './policies.css'; 
import Navbar from '../../components/navbar/Navbar';
import { Link } from 'react-router-dom';

function Policies() {
  return (
    <Navbar>
      <header>
        <h1>Company Policies</h1>
      </header>

      <section className="policy">
        <h2>Code of Conduct</h2>
        <p>Our code of conduct outlines the expected behavior and ethical standards for all employees. Violations may result in consequences, including disciplinary actions.</p>
      </section>

      <section className="policy">
        <h2>Equal Employment Opportunity (EEO) and Anti-Discrimination Policy</h2>
        <p>We are committed to providing equal opportunities for all employees and applicants. Discrimination based on race, gender, age, religion, etc., is strictly prohibited.</p>
      </section>

      <section className="policy">
        <h2>Harassment and Bullying Policy</h2>
        <p>We do not tolerate harassment or bullying in the workplace. Employees are encouraged to report any incidents, and a proper procedure is in place for handling complaints.</p>
      </section>

      <section className="policy">
        <h2>Workplace Health and Safety</h2>
        <p>We prioritize the health and safety of our employees. Detailed safety protocols and procedures are in place, along with information on emergency evacuation plans.</p>
      </section>

      <footer>
        <Link to="/"><button>Go Back to Dashboard</button></Link>
        <p>&copy; 2024 Harmony Hive. All rights reserved.</p>
      </footer>
      </Navbar>
  );
}

export default Policies;