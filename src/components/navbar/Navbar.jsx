// function Navbar(){
//     return(
//         <h1>Navbar Component</h1>
//     );
// }
// export default Navbar;

import React from 'react';
import './Navbar.css';
const Navbar = () => {
  return (
    <nav>
        <div><h1>Dashboard</h1></div>
      
     
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact</a></li>
        <li><a href="#"><i className="fa fa-search"></i></a></li>
        <li><a href="#">Login/Signup</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
