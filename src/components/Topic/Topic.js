import React, { useEffect } from "react";
import jwt from "jsonwebtoken";
import { useNavigate } from "react-router-dom";
import TopicCard from "../TopicCard/TopicCard";
import { datatopic } from "./data";
import "./style.css";
function Topic() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const user = jwt.decode(token);
      if (!user) {
        localStorage.removeItem("token");
        navigate("/login");
      }
    }
  }, []);

  const cards = datatopic.map((item) => {
    return (
      <TopicCard
        className="h-100"
        key={item.id}
        topic={item.dsatopic}
        text={item.text}
        link={item.link}
        url={item.url}
      />
    );
  });

  return (
    <>
      <div className="cards d-flex">
        <section className="mx-3 h-100 row row-cols-1 row-cols-md-2 row-cols-lg-3 mt-3 grids">
          {cards}
        </section>
      </div>
    </>
  );
}

export default Topic;
