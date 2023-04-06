import Image from "next/image";
import Link from "next/link";

const Xidmetler = ({ data }) => {
  return (
    <div>
      <h1>Xidmetler</h1>
      <br></br>
      <div>
        {data.map((xidmet) => (
          <Link
            key={xidmet.id}
            href="https://images.unsplash.com/photo-1563453392212-326f5e854473?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            passHref
          >
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
