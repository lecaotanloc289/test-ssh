import React from "react";
import "./CircleIcon.scss";
const CircleIcon = ({ link, children }) => {
  return (
    <a href="">
      <div className="circle-icon">
        <img className='darkfill-lightest' src={link} alt="" />
        {children && (
          <div className="additional-content">
            {children}
          </div>
        )}
      </div>
    </a>
  );
};



export default CircleIcon;
