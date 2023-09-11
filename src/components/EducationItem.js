import React from "react";
import item from "../assets/img/educacion.png"


const EducationItem = (props) => {
  const { title, education, tiempo } = props.education;
  return (
    <div className="w-full md:w-1/2">
      <div className="mb-4 md:mx-4">
        <div className="flex justify-between items-center mb-1">
          <h5 className="text-md text-gray-400 font-light"><img src={item} alt="Image" /> {title} <img src={item} alt="Image" /></h5>
          <span className="text-md text-red-600 font-bold">{education}</span>
          <h6 className="time">{tiempo}</h6>
        </div>
        <div className="w-full bg-red-200 relative h-2 rounded">
          <div
            className="absolute h-full left-0 top-0 bg-red-600 rounded"
            style={{ width: `${education}` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default EducationItem;
