import React from "react";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary border-bottom  sticky-top">
        <div className="container-fluid">
          <p className="navbar-brand mt-1">Company name</p>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="d-flex justify-content-between">
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Feature
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Enterprise
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link " href="#">
                    Support
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link " href="#">
                    Pricing
                  </a>
                </li>
              </ul>
              <div className="d-flex">
                <button className="btn btn-outline-info" type="submit">
                  Sign up
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
