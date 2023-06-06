import Image from "next/image";
import Link from "next/link";
import { logo } from "@/public/logo_cagiraz.png";

const Musteriler = ({ musteriler }) => (
  <>
    <div className="">
      <h2
        className="my-h2 pb-[15px] lg:pb-[30px] text-center"
      >
        Müştərilər
      </h2>

      <div className="flex items-center gap-x-[40px] sm:gap-x-[50px] md:gap-x-[60px] lg:gap-x-[70px] xl:gap-x-[80px] 2xl:gap-x-[90px] overflow-x-scroll">
        {musteriler?.map((musteri) => (
          <div key={musteri.id} className="flex-shrink-0">
            <Image
              className="max-w-[100px] max-h-[100px] md:max-w-[150px] md:max-h-[150px] lg:max-w-[200px] lg:max-h-[200px] xl:max-w-[250px] xl:max-h-[250px] 2xl:max-w-[300px] 2xl:max-h-[300px] object-contain"
              width={500}
              height={500}
              src={musteri.logo}
              alt={musteri.id}
            />
          </div>
        ))}
</div>

      

      {/* <div className="flex  ">
        <ul className="flex space-x-[90px] overflow-x-auto">
          {musteriler?.map((musteri) => (
            <div key={musteri.id}>
              <Image
                className="w-[100px] h-[100px] object-contain "
                width={500}
                height={500}
                src={musteri.logo}
                alt={musteri.id}
              />
            </div>
          ))}
        </ul>
    </div> */}




    </div>
  </>
);

export default Musteriler;





















// import Image from "next/image";
// import Link from "next/link";
// import { logo } from "@/public/logo_cagiraz.png";

// const Musteriler = ({ musteriler }) => (
//   <>
//     <div className="">
//       <h2
//         className="my-h2 pb-[15px] lg:pb-[30px] text-center"
//       >
//         Müştərilər
//       </h2>

//       <ul
//         className="
//         mx-auto grid grid-cols-4 items-center sm:grid-cols-6 lg:grid-cols-5
//         gap-x-[15px] sm:gap-x-[30px] md:gap-x-[45px] lg:gap-x-[60px] xl:gap-x-[75px] 2xl:gap-x-[90px] 
//         gap-y-[10px] lg:gap-y-[40px] mt-[15px] lg:mt-[60px]"
//       >
//         {musteriler?.map((musteri) => (
//           <li key={musteri.id}>
//             <Image
//               className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
//               width={100}
//               height={100}
//               src={musteri.logo}
//               alt={musteri.id}
//             />
//           </li>
//         ))}
//       </ul>
//     </div>
//   </>
// );

// export default Musteriler;
