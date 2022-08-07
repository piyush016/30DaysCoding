import React from "react";
import Typewriter from "typewriter-effect";

import "./style.css";
export default function Navbar() {
  return (
    <nav>
      <div>
        <h1 className="head">30 DAYS DSA CHEATSHEET</h1>
      </div>

      <div className="message">
        <Typewriter
          options={{
            strings: [
              "Array",
              "Linked List",
              "Matrix",
              "String",
              "Searching",
              "Sorting",
              "Trees",
              "BST",
              "Greedy Algorithm",
              "Stacks",
              "Queues",
              "Heaps",
              "Graphs",
              "DP",
            ],
            delay: 50,
            deleteSpeed: 75,
            autoStart: true,
            loop: true,
            pauseFor: 500,
          }}
        />
      </div>
    </nav>
  );
}
