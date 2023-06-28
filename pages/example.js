








import React, { useEffect, useState } from "react";
import axios from "axios";

function Example() {
  const config = {
    headers:{
      "Accept-Language": "az",
    }
  };
  

  // bas xidmetler. Burada her bir bas xidmet ucun melumatlar var: description....
  axios.get('https://api.cagir.az/api/service/getAllForFront', config).then(response => {
      
    // console.log(response);
  });


  // bura sub xidmetlerdir. linkin sonundaki id ile diger api den gelen, 
  // yeni hansi xidmet sehvesine gediremse, bu linkdeki olan alt xidmetler gorsenmelidir
  axios.get('https://api.cagir.az/api/service/getSubServicesByParentId?parentId=1', config).then(response => {
    
  console.log(response);
});








// axios.post('https://api.cagir.az/api/service/service-name',{"titleUrl":"temizlik-xidmeti"},config).then(response => {
    
//   console.log(response);
// });



  return (
    <div>
      Example
     
    </div>
  );
}

export default Example;