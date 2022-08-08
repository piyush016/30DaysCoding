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

          <div className="button">
            <a href={props.link} target="_blank" rel="noreferrer">
              <div className="pink">
                <button>Learn More?</button>
              </div>
            </a>
            <a href={props.url}>
              <div className="blue">
                <button>Solve Questions?</button>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
