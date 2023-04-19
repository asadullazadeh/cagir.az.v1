import Head from "next/head";
import { Inter } from "next/font/google";
import Karusel from "@/src/components/karusel/karusel";
import Ustalar from "@/src/components/alt_xidmetler/alt_xidmetler";
import Reyler from "@/src/components/reyler/reyler";
import Icracilar from "@/src/components/icraci/icraci";
import Suallar from "@/src/components/suallar/suallar";
import Deyerler from "@/src/components/deyerler/deyerler";
import Bloq from "@/src/components/bloq/bloq";
import Partnyorlar from "@/src/components/partnyorlar/partnyorlar";


const inter = Inter({ subsets: ["latin"] });

export async function getServerSideProps() {
  const data = await import("/data/data.json");
  const { ustalar,reyler,icracilar } =
    data;
  return {
    props: {
        ustalar,
        reyler,
        icracilar,
    },
  };
}

export default function Usta(props) {
  const { ustalar,reyler,icracilar} =
    props;

  return (
    <div>
      <main className="space-y-[135px] w-[1392px]">
        < Ustalar {...{ ustalar }} />
        < Reyler {...{reyler}} />
        < Icracilar {...{icracilar}} />
       
      </main>
    </div>
  );
}