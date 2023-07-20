// components/CustomDropdown.js
import React, { useEffect, useState, useRef } from "react";
import axios from "axios";


const CustomDropdown = () => {
  const [getMainServices, setgetMainServices] = useState([]);
  useEffect(() => {
    axios
      .get("https://api.cagir.az/api/service/getAllForFront", {
        headers: {
          "Accept-Language": "az",
        },
      })
      .then((response) => {
        // Handle the response data
        setgetMainServices(response.data.result);
      })
      .catch((error) => {
        // Handle any errors
        console.error(error);
      });
  }, []);

  // console.log(getMainServices);

  return (
    <div className="custom-dropdown">
    
    </div>
  );
};

export default CustomDropdown;
