import React from "react";
import './style.css'
export default function About() {
  return (
    <>
      <div className="main">
        <p className="info-app">
          30 Days DSA Cracker helps you build your confidence in solving any coding related question and helps you prepare for your placements. <br/>
          <span role="img" aria-label="student">
            👨🏻‍🎓
          </span>
        </p>
        <div className="sub">
          <p>
            <a href="piyush.github.io">30 days coding cheatsheet</a> <br/>
            is your personal web-based progress tracker. <br/>
            <span role="img" aria-label="join-hands">
            📖
            </span>
          </p>
          </div>
          <div className="credit">
            Project by{" "}
            <a
              href="https://www.linkedin.com/in/piyush016/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Piyush
            </a>{" "}
            <span role="img" aria-label="code-men">
              👨🏻‍💻
            </span>


          <h3 className="text-center my-5">
            
              For the{" "}
              <span role="img" aria-label="orange-hearth" className="emojiFix">
                🧡
              </span>{" "}
              to code{" "}
              <span role="img" aria-label="victory" className="emojiFix">
                ✌🏻
              </span>
            {" "}
          </h3>
        </div>
      </div>
    </>
  );
}
