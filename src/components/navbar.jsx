// import React, { Component } from 'react';
import React from 'react';

// export default class NavBar extends Component {
//     render() {
//         return (
//             <nav className="navbar navbar-light bg-light">
//               <a className="navbar-brand" href="#">Navbar</a>
//               <span className="badge badge-pill badge-secondary">
//                 { this.props.totalCounters }
//               </span>
//             </nav>
//         );
//     }
// }

// Stateless Functional Component
// because there is no need for whole class here as there is no state
const NavBar = props => {
    return (
        <nav className="navbar navbar-light bg-light">
          <a className="navbar-brand" href="#">Navbar</a>
          <span className="badge badge-pill badge-secondary">
            { props.totalCounters }
          </span>
        </nav>
    );
}

export default NavBar;
