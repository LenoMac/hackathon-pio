import React from "react";
import "./header.scss";
import { MdLightMode } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";

export default function header() {
  return (
    <div className="header">
      <Link to='/' className="link">
        <p>PioAI</p>
      </Link>
      <div className="right-side">
        <span>
          <MdLightMode className="light-mode" />
        </span>
      </div>
    </div>
  );
}
