import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Checkbox from "@/src/components/form/checkbox";
import Qiymet from "@/src/components/form/qiymet";
import Toggle from "@/src/components/form/toggle";
import CustomInput from "@/src/components/form/custom_input";
import Textarea from "@/src/components/form/textarea";
import Calendar from "@/src/components/form/datepicker";
import Download_image from "@/src/components/form/download_image";
import Promocode from "@/src/components/form/promocode";
import PaymentMethod from "@/src/components/form/payment_method";
import { useForm } from "react-hook-form";


const Form = () => {

  return (
    <>
      <div>
        {/* qiymet part */}
        <div>
          <Qiymet />
        </div>
        <br></br>
        {/* Toggle part */}
        <div>
          {/* <Toggle /> */}
        </div>
        <br></br>
        {/* Xidmeti sec button */}
        <br></br>
        {/* Radio button */}
        <div>
          {/* <Checkbox text="50 kv. metrə qədər" /> */}
        </div>

        <br></br>

        <div>
        < CustomInput />
        </div>

        {/* Textarea */}
        <div>
          < Textarea />
        </div>

        <br></br>
        {/* Datapicker */}
        <div>
          < Calendar />
        </div>
        <br></br>
        <div>
          < Download_image />
        </div>
        <br></br>

        
        
        <div>
        <Checkbox text="50-101 kv. metrə qədər" />
        </div>
        <br></br>
        <div>
          < Promocode />
        </div>
        <br></br>
        <div>
          < PaymentMethod />
        </div>
        <br></br>

        <div>
          {/* < Map /> */}

        </div>

        <div></div>

      </div>
    </>
  );
};

export default Form;




// import React, { useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import up from "@/icons/form/up.svg";
// import down from "@/icons/form/down.svg";
// import Checkbox from "@/src/components/form/checkbox";
// import Qiymet from "@/src/components/form/qiymet";
// import Toggle from "@/src/components/form/toggle";
// import Textarea from './../src/components/form/textarea';
// import Datapicker from './../src/components/form/datapicker';

// const Form = () => {
//   // this it for
//   const [isHidden, setIsHidden] = useState(true);
//   const toggleHidden = () => {
//     setIsHidden(!isHidden);
//   };

//   // Checkbox click
//   const [isChecked, setIsChecked] = useState(false);
//   const handleCheckboxChange = (event) => {
//     setIsChecked(event.target.checked);
//   };

//   return (
//     <>
//       <div>

//         {/* qiymet part */}
//         <div>
//           < Qiymet />
//         </div>

//         {/* Toggle part */}
//         <div>
//           < Toggle />
//         </div>

//         {/* Xidmeti sec button */}

//         {/* Radio button */}
//         <div>
//           < Checkbox />
//         </div>
//       </div>
//     </>
//   );
// };

// export default Form;
