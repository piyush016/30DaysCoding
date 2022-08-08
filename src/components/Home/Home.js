import React from "react";
import background from "../../assets/lim.jpg";
import "./style.css";

export default function Home() {
  return (
    <>
      <div>
        <img className="img" alt="background" src={background} />
      </div>
    </>
  );
}
