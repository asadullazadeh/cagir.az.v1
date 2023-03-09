import Image from "next/image";
import Link from "next/link";

const Xidmetler = ({ data }) => {
  return (
    <div>
      <h1>Xidmetler</h1>
      <br></br>
      <div>
        {data.map((xidmet) => (
          <Link key={xidmet.id} href={`/${xidmet.id}`} passHref>
            <h2>{xidmet.title}</h2>
            <Image
              src={xidmet.image}
              alt={xidmet.title}
              width={300}
              height={300}
            />
            <br></br>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Xidmetler;

export async function getStaticProps() {
  const { xidmet_kateqoriyasi } = await import("/data/data.json");

  return {
    props: {
      data: xidmet_kateqoriyasi,
    },
  };
}
