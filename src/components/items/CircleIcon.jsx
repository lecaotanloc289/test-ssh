import React from "react";
import "./CircleIcon.scss";
const CircleIcon = ({ link }) => {
  return (
    <a href="">
      <div className="circle-icon">
        <img src={link} alt="" />
      </div>
    </a>
  );
};

export default CircleIcon;
