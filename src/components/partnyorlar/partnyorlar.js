import Image from "next/image";
import Link from "next/link";
import { logo } from '@/public/logo_cagiraz.png';

const Partnyorlar = ({ partnyorlar }) => (
  <>
    <div className="h-[228px]">

      <h2 className="text-center h2-styles">Partnyorlar</h2>

        <div className="grid grid-cols-6 gap-x-[90px] gap-y-[41px] mt-[60px]">
          {partnyorlar?.map((partnyor) => (
            <div key={partnyor.name}>
              <Image className="max-w-[100px] max-h-[100px]" width={200} height={200} src={partnyor.logo} alt="logos" />
            </div>
          ))}
        </div>
      
    </div>
  </>
);

export default Partnyorlar;
