import React from "react";
import background from "../../assets/lim.jpg";
import "./style.css";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

export default function Home() {
  return (
    <>
      <div>
        <img className="img" alt="background" src={background} />
      </div>
      <div className="login">
        <Link to="/login">
           <Button>Login</Button>
        </Link>
      </div>
      <div className="signup">
        <Link to="/signup">
         
        </Link>
      </div>
    </>
  );
}
