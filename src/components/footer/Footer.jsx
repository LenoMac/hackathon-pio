import React from "react";
import "./footer.scss";
import { FaRegCopyright } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="footer">
      <span>
        <FaRegCopyright />
        <p>2024</p>
      </span>
    </div>
  );
}
