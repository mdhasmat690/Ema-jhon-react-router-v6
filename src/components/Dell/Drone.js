import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const number = [1]

const Drone = () => {
  
  return (
    <div>
      this is drone
     <Link to={`/drone/${number}`}>buy now</Link>
    </div>
  );
};

export default Drone;
