import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="project">
          <h2>
            <a
              href="https://github.com/piyush016"
              target="_blank"
              without
              rel="noreferrer"
            >
              {/* <Chip label="⭐ This Project" color="secondary" /> */}
            </a>
          </h2>
        </div>
        
        <div>
              <h3 className="name">P.I.Y.U.S.H</h3>
        </div>

        <div className="about">
          <h2>
            <Link to="/about">
              {/* <Chip label="🧐 About" color="error"/> */}
            </Link>
          </h2>
        </div>
      </footer>
    </>
  );
}
