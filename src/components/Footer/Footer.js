import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css";
import { AiTwotoneHome } from "react-icons/ai";
import { FaUserAstronaut } from "react-icons/fa";
import { TbMessages } from "react-icons/tb";
import { MdTopic } from "react-icons/md";
import { BsFillInfoCircleFill } from "react-icons/bs";

export default function Footer() {
  const [click, setClick] = React.useState(false);
  const handleClick = () => setClick(!click);

  return (
    <div>
      <div className="nav-container">
        <ul className="nav-menu">
          <li className="nav-item">
            <NavLink
              to="/contact"
              className={click ? "nav-items active" : "nav-items"}
              onClick={click ? handleClick : null}
            >
              {TbMessages}
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              to="/topic"
              className={click ? "nav-items active" : "nav-items"}
              onClick={click ? handleClick : null}
            >
              {MdTopic}
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              to="/"
              className={click ? "nav-items active" : "nav-items"}
              onClick={click ? handleClick : null}
            >
              {AiTwotoneHome}
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              to="/login"
              className={click ? "nav-items active" : "nav-items"}
              onClick={click ? handleClick : null}
            >
              {FaUserAstronaut}
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              to="/about"
              className={click ? "nav-items active" : "nav-items"}
              onClick={click ? handleClick : null}
            >
              {BsFillInfoCircleFill}
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}
