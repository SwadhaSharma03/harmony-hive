import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = ({ children }) => {
  return (
    <div className="dash-body">
      <nav className="dash-nav" >
        <a href="#">
          <img src="https://img.icons8.com/fluent/48/000000/search.png" alt="Search Icon" className="icon" />
          Dashboard
        </a>
        <a href="./table/table.html">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-j7ZC-XuoYzu5y_KpdWtEJsuFlwLEW00z_w&usqp=CAU" alt="Table Icon" className="icon" />
          Table
        </a>
        <a href="#">
          <img src="https://img.icons8.com/fluent/48/000000/pie-chart.png" alt="Reports Icon" className="icon" />
          Reports
        </a>
        <a href="#">
          <img src="https://img.icons8.com/fluent/48/000000/user-male-circle.png" alt="User Icon" className="icon" />
          Manage User
        </a>
        <Link to='/policies'>
          <img src="https://img.icons8.com/fluent/48/000000/user-male-circle.png" alt="User Icon" className="icon" />
          
          Policies
          </Link>
      </nav>
      <main className="dash-main">
        <header className="dash-header">
          <div className="search-bar">
            <input type="text" className="search-input" placeholder="Search..." />
          </div>
          <div className="user-profile">
            <img src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_640.png" alt="User Avatar" />
          </div>
        </header>
        {children}
      </main>
    </div>
  );
};

export default Navbar;
