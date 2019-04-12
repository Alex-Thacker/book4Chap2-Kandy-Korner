import React, { Component } from 'react'
import { Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"

export default class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-light fixed-top light-blue flex-md-nowrap p-0 shadow">
          <ul>
              <li className = "nav-item">
                <Link className="nav-link" to="/">Candy Type</Link>
              </li>
              <li className = "nav-item">
                  <Link className="nav-link" to="/employees">Employees</Link>
              </li>
              <li className = "nav-item">
                  <Link className="nav-link" to="/stores">Stores</Link>
              </li>
          </ul>
      </nav>
    )
  }
}


// render() {
//     return (
//         <nav className="navbar navbar-light fixed-top light-blue flex-md-nowrap p-0 shadow">
//             <ul className="nav nav-pills">
//                 <li className="nav-item">
//                     <Link className="nav-link" to="/">Locations</Link>
//                 </li>
//                 <li className="nav-item">
//                     <Link className="nav-link" to="/animals">Animals</Link>
//                 </li>
//                 <li className="nav-item">
//                     <Link className="nav-link" to="/employees">Employees</Link>
//                 </li>
//                 <li className = "nav-item">
//                     <Link className="nav-link" to="/owners">Owners</Link>
//                 </li>
//             </ul>
//         </nav>
//     )
// }
// }