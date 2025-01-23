import React from "react";
import "./StatusCircle.css";

const StatusCirlce = ({status}) => {
  return (
    <>
      <div class={`status-circle-ripple ${status}`}></div>
    </>
  );
};

export default StatusCirlce;
