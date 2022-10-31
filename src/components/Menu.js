import { Link } from "react-router-dom";

import NavHeader from "./NavHeader";

export  function Menu() {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <NavHeader />
        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
            <Link to="/features" >features</Link>
            </li>
            <li>
            <Link to="/services">services</Link>
            </li>
            <li>
            <Link to="/portfolio" >portfolio</Link>
            </li>
            <li>
            <Link to="/testimonials" >testimonials</Link>
            </li>
            <li>
            <Link to="/team" >team</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
