import React from "react";
import "./style.css";

export default function TopicCard(props) {
  return (
    <div className="testimotionals">
      <div className="card">
        <div className="layer"></div>
        <div className="content">
          <div className="details">
            <h2>{props.topic}</h2>
          </div>

          <p>{props.text}</p>

          <div className="button-cont">
            <div className="panel blue">
              <a href={props.link} target="_blank" rel="noreferrer">
                <button>Learn More?</button>
              </a>
            </div>
            <div className="panel pink">
              <a href={props.url}>
                <button>Solve Questions?</button>
              </a>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
