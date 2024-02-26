import React from "react";

function Footer() {
  return (
    <div className="container">
      <div className="pt-4 my-md-5 pt-md-5 border-top">
        <div className="row">
          <div className="col-12 col-md-6">
            <img
              style={{ height: "24px ", width: "24px", marginBottom: "0.5rem" }}
              src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/bootstrap-5-logo-icon.png"
              alt=""
            />
            <small>@ 2024-2025</small>
          </div>
          <div className="col-6 col-md">
            <h4>Features</h4>
            <ul className="list-unstyled text-small">
              <li>Cool stuff</li>
              <li>Random feature</li>
              <li>Team feature</li>
              <li>Stuff for developers</li>
              <li>Another one</li>
              <li>Last time</li>
            </ul>
          </div>
          <div className="col-6 col-md">
            <h4>Resources</h4>
            <ul className="list-unstyled text-small">
              <li>Resource</li>
              <li>Resource name</li>
              <li>Another resource</li>
              <li>Final resource</li>
            </ul>
          </div>
          <div className="col-6 col-md">
            <h4>About</h4>
            <ul className="list-unstyled text-small">
              <li>Team</li>
              <li>Locations</li>
              <li>Privacy</li>
              <li>Terms</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
