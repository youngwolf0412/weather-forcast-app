/* eslint-disable react/prop-types */
import React from "react";

// eslint-disable-next-line react/prop-types
const Forecast = ({title,data}) => {
  // console.log(data);
  
  return (
    <div className="">
      
      <div className="flex items-center justify-center mt-6">
        <p className="font-medium uppercase">{title}</p>
        <hr className="my-1" />
      </div>
      <div className="flex items-center justify-between">
        {data.map((d, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center"
          >
            
            <p className="font-light text-sm">{d.title}</p>
            <img src={d.icon} alt="weather icon" className="w-12 my-1" />
            <p className="font-medium">{`${d.temp.toFixed()}°`}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forecast;
